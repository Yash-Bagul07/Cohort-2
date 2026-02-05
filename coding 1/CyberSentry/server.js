javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const http = require('http');
const socketIo = require('socket.io');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/nids', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: Date
});

const Log = mongoose.model('Log', {
  timestamp: Date,
  sourceIP: String,
  destinationIP: String,
  port: Number,
  packetSize: Number,
  threatLevel: String,
  actionTaken: String
});

const Alert = mongoose.model('Alert', {
  timestamp: Date,
  description: String,
  severity: String,
  sourceIP: String,
  destinationIP: String
});

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password, role = 'user' } = req.body;
    
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date()
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/logs/upload', authenticateToken, (req, res) => {
  if (!req.files || !req.files.logFile) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const logFile = req.files.logFile;
  const results = [];

  logFile.mv('./uploads/' + logFile.name, (err) => {
    if (err) return res.status(500).json({ message: 'File upload failed' });

    fs.createReadStream('./uploads/' + logFile.name)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          const logs = results.map(log => ({
            timestamp: new Date(log.timestamp),
            sourceIP: log.sourceIP,
            destinationIP: log.destinationIP,
            port: parseInt(log.port),
            packetSize: parseInt(log.packetSize),
            threatLevel: log.threatLevel || 'Normal',
            actionTaken: log.actionTaken || 'None'
          }));

          await Log.insertMany(logs);
          
          // Analyze logs for intrusions
          await analyzeLogsForIntrusions(logs);
          
          res.json({ message: 'Logs uploaded and analyzed successfully', count: logs.length });
        } catch (error) {
          res.status(500).json({ message: 'Error processing logs' });
        }
      });
  });
});

app.get('/api/logs', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 50, search = '' } = req.query;
    const skip = (page - 1) * limit;

    let query = {};
    if (search) {
      query = {
        $or: [
          { sourceIP: { $regex: search, $options: 'i' } },
          { destinationIP: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const logs = await Log.find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Log.countDocuments(query);

    res.json({ logs, totalPages: Math.ceil(total / limit), currentPage: parseInt(page) });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/alerts', authenticateToken, async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 }).limit(100);
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/stats', authenticateToken, async (req, res) => {
  try {
    const totalPackets = await Log.countDocuments();
    const suspiciousPackets = await Log.countDocuments({ threatLevel: { $in: ['Medium', 'High'] } });
    const highThreatPackets = await Log.countDocuments({ threatLevel: 'High' });
    
    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentAlerts = await Alert.countDocuments({ timestamp: { $gte: last24Hours } });

    res.json({
      totalPackets,
      suspiciousPackets,
      highThreatPackets,
      recentAlerts
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Intrusion Detection Logic
async function analyzeLogsForIntrusions(logs) {
  const alerts = [];

  // Rule 1: Multiple failed login attempts from same IP
  const failedLogins = logs.filter(log => log.port === 22 && log.threatLevel === 'High');
  const ipCounts = {};
  failedLogins.forEach(log => {
    ipCounts[log.sourceIP] = (ipCounts[log.sourceIP] || 0) + 1;
  });

  for (const [ip, count] of Object.entries(ipCounts)) {
    if (count >= 5) {
      alerts.push({
        timestamp: new Date(),
        description: `Multiple failed SSH login attempts from ${ip} (${count} attempts)`,
        severity: 'High',
        sourceIP: ip,
        destinationIP: 'Multiple'
      });
    }
  }

  // Rule 2: High frequency requests from single IP
  const recentLogs = logs.filter(log => 
    new Date() - log.timestamp < 5 * 60 * 1000 // Last 5 minutes
  );
  const frequencyCounts = {};
  recentLogs.forEach(log => {
    frequencyCounts[log.sourceIP] = (frequencyCounts[log.sourceIP] || 0) + 1;
  });

  for (const [ip, count] of Object.entries(frequencyCounts)) {
    if (count > 20) {
      alerts.push({
        timestamp: new Date(),
        description: `High request frequency from ${ip} (${count} requests in 5 minutes)`,
        severity: 'Medium',
        sourceIP: ip,
        destinationIP: 'Multiple'
      });
    }
  }

  // Rule 3: Blacklisted ports
  const blacklistedPorts = [23, 135, 139, 445, 1433, 1434, 3389];
  const blacklistedTraffic = logs.filter(log => blacklistedPorts.includes(log.port));
  
  blacklistedTraffic.forEach(log => {
    alerts.push({
      timestamp: new Date(),
      description: `Traffic detected on blacklisted port ${log.port} from ${log.sourceIP}`,
      severity: 'High',
      sourceIP: log.sourceIP,
      destinationIP: log.destinationIP
    });
  });

  if (alerts.length > 0) {
    await Alert.insertMany(alerts);
    io.emit('new-alert', alerts);
  }
}

// Socket.IO for real-time updates
io.on('connection', (socket) => {
  console.log('Client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
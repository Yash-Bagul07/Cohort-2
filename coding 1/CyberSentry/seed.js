javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nids', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require('./models/User');
const Log = require('./models/Log');
const Alert = require('./models/Alert');

async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Log.deleteMany({});
    await Alert.deleteMany({});

    // Create demo users
    const hashedAdminPassword = await bcrypt.hash('admin123', 10);
    const hashedUserPassword = await bcrypt.hash('user123', 10);

    const adminUser = new User({
      username: 'admin',
      email: 'admin@nids.com',
      password: hashedAdminPassword,
      role: 'admin',
      createdAt: new Date()
    });

    const regularUser = new User({
      username: 'user',
      email: 'user@nids.com',
      password: hashedUserPassword,
      role: 'user',
      createdAt: new Date()
    });

    await adminUser.save();
    await regularUser.save();

    // Create sample network logs
    const sampleLogs = [];
    const ports = [22, 80, 443, 53, 21, 25, 110, 143, 993, 995];
    const threatLevels = ['Normal', 'Normal', 'Normal', 'Normal', 'Medium', 'High'];
    
    for (let i = 0; i < 50; i++) {
      const timestamp = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);
      sampleLogs.push({
        timestamp: timestamp,
        sourceIP: `192.168.1.${Math.floor(Math.random() * 50) + 1}`,
        destinationIP: `10.0.0.${Math.floor(Math.random() * 10) + 1}`,
        port: ports[Math.floor(Math.random() * ports.length)],
        packetSize: Math.floor(Math.random() * 1500) + 100,
        threatLevel: threatLevels[Math.floor(Math.random() * threatLevels.length)],
        actionTaken: ['None', 'Logged', 'Blocked'][Math.floor(Math.random() * 3)]
      });
    }

    await Log.insertMany(sampleLogs);

    // Create sample alerts
    const sampleAlerts = [
      {
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        description: 'Multiple failed SSH login attempts from 192.168.1.25',
        severity: 'High',
        sourceIP: '192.168.1.25',
        destinationIP: '10.0.0.5'
      },
      {
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
        description: 'High request frequency from 192.168.1.30',
        severity: 'Medium',
        sourceIP: '192.168.1.30',
        destinationIP: 'Multiple'
      },
      {
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        description: 'Traffic detected on blacklisted port 135',
        severity: 'High',
        sourceIP: '192.168.1.42',
        destinationIP: '10.0.0.8'
      }
    ];

    await Alert.insertMany(sampleAlerts);

    console.log('Database seeded successfully!');
    console.log('Admin credentials: admin@nids.com / admin123');
    console.log('User credentials: user@nids.com / user123');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
}

seedDatabase();
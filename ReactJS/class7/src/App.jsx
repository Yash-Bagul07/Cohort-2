import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Navbar from './Pages/Navbar'

const App = () => {
  return (
    <div>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product' element={<Product/>} />
    </Routes>
</div>
  )
}

export default App

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink to='/'
      style={({isActive})=>({
        color: isActive? 'red' : 'white'
      })
    }
      >Home</NavLink>
      <NavLink to='/about'
       style={({isActive})=>({
        color: isActive? 'red' : 'white'
      })
    }>About</NavLink>
      <NavLink to='/product'
       style={({isActive})=>({
        color: isActive? 'red' : 'white'
      })
    }>Product</NavLink>
    </div>
  )
}

export default Navbar

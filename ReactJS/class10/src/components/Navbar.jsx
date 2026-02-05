import React, { useContext } from 'react'
import { ThemeDataContext } from './ThemeContext'

const Navbar = () => {

  const data = useContext(ThemeDataContext)

  return (
    <div>
      <h1>Navbar</h1>
      {data}
    </div>
  )
}

export default Navbar

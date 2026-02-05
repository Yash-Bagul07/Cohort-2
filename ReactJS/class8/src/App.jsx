import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('Light')

  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }


  return (
    <div>
     <h1>Theme is {theme}</h1>
     <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App

import React, { useContext } from 'react'
import { UserDataContext } from './UserContext'

const Navbar = () => {

  const data = useContext(UserDataContext)

  return (
    <div className='bg-blue-400 w-screen h-15 text-3xl'>
      <h1>This is Navbar</h1>
      {data}
    </div>
  )
}

export default Navbar

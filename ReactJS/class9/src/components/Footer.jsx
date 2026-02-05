import React, { useContext } from 'react'
import { UserDataContext } from './UserContext'

const Footer = () => {

  const user = useContext(UserDataContext)
  return (
    <div className='absolute bg-emerald-400 w-screen h-15 text-3xl bottom-0'>
      <h1>This is Footer</h1>
      {user}
    </div>
  )
}

export default Footer

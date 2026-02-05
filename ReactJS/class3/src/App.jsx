import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setname] = useState('')

  const [allUsers, setuAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

const oldUsers = [...allUsers]

    oldUsers.push(name) 
    console.log(oldUsers);
    

    setuAllUsers(oldUsers)

    setname('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}> 
        <input type="text" placeholder='Enter Name' value={name} required
         onChange={(e)=>{
          setname(e.target.value)
        }} />
      <button>Submit</button>
      </form>
      {allUsers.map((elem,idx)=>{
        return <h1 key={idx}>{elem}</h1>
            })}
    </div>
  )
}

export default App

App
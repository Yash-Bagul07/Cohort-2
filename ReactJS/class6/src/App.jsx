import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [userName, setUserName] = useState('')
  const [num, setNum] = useState(0)

  const getData =async()=>{
    const response = await axios.get('https://randomuser.me/api/')
    setUserName((response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
  }

  useEffect(function(){
    getData()
  },[num])

  return (
    <div>
      {userName}
      <br />
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Click Here</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {
    
const [num, setNum] = useState(0)

  
    
  return (  
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}
      >
        Increase
        </button>

        <button onClick={()=>{
        setNum(num-1)
      }}
      >
        Decrease
        </button>

        <button onClick={()=>{
        setNum(num+5)
      }}
      >
        Jump by 5
        </button>

    </div>
  )
}

export default App

import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='p-15  h-screen bg-black flex justify-center align-baseline'>
      <Card user='Yash' age={21}/>
      <Card user='Om' age={21}/>
      <Card user='Shreyas' age={21}/>
      
    </div>
  )
}
export default App


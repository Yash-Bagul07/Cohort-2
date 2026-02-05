import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar title={'Sheriyans'}  links={['Home','Courses','About','Contact']}/>
    </div>
  )
}

export default App


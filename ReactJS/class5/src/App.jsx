import axios from 'axios'
import React, {useState} from 'react'

const App = () => {

    const [allData, setallData] = useState([])

    async function getData(){

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setallData(response.data)
    } 


  return (
    <div>
      <button onClick={getData} >Get Data</button>

      {allData.map(function(elem, idx){
        return <h1 key={idx}>{elem.name}</h1>
      })}


    </div>
  )
}

export default App

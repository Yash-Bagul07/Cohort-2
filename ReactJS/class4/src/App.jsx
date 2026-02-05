import React, {useState} from 'react'
import Card from './components/Card'

const App = () => {

 

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setAllUsers] = useState(localData)


  const submitHandler = (e)=>{
    e.preventDefault()

    const oldUsers = [...allUsers]

    oldUsers.push({userName,userRole,imageURL,userDesc})

    console.log(oldUsers)

    setAllUsers(oldUsers)
    localStorage.setItem('all-users', JSON.stringify(oldUsers))


    setUserName('')
    setImageURL('')
    setUserRole('')
    setuserDesc('')
  }

  const deleteHandler=(idx)=>{
    const copyUsers = [...allUsers]

    copyUsers.splice(idx,1)

    /*console.log(copyUsers)*/

    setAllUsers(copyUsers)
        localStorage.setItem('all-users', JSON.stringify(copyUsers))
}



  return (
    <div className='h-screen bg-black text-white text-3xl'>
      <form onSubmit={(e)=>
        submitHandler(e)
      } className='flex flex-wrap justify-center p-10 '>
        <input
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}


         className='border-2 px-3 text-sm font-semibold py-2 rounded m-2 w-[48%]' 
         type="text" 
         placeholder='Enter Name' required />

        <input
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value)
        }}
         className='border-2 px-3 text-sm font-semibold py-2 rounded m-2 w-[48%]' 
         type="text" 
         placeholder='Image URL' />

        <input
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
         className='border-2 px-3 text-sm font-semibold py-2 rounded m-2 w-[48%]' 
         type="text" 
         placeholder='Enter role' />

        <input
        value={userDesc}
        onChange={(e)=>{
          setuserDesc(e.target.value)
        }}
         className='border-2 px-3 text-sm font-semibold py-2 rounded m-2 w-[48%]' 
         type="text" 
         placeholder='Enter Description' />

        <button className='px-10 py-2 bg-emerald-400 rounded text-xl font-semibold active:scale-95  m-2 w-[97.5%]'>Create User</button>
      </form>


      <div className='flex flex-wrap p-2 gap-5'>
        {allUsers.map(function(elem , idx){
          return <div key={idx} className='w-[23vw] rounded-xl py-8 px-8 flex items-center flex-col text-center  bg-white '>
        <img className='h-24 w-24 rounded-full object-cover object-center' src="https://images.pexels.com/photos/31121293/pexels-photo-31121293.jpeg" alt="" />
      <h1 className='text-2xl mt-2 font-bold text-black'>{elem.userName}</h1>
      <h5 className='text-lg  text-blue-500 font-semibold my-3'>{elem.userRole}</h5>
      <p className='text-sm font-medium leading-tight text-black'>{elem.userDesc}</p>
      <button onClick={(idx)=>{
        deleteHandler(idx)
      }}  
      
      className='px-3 py-1 rounded bg-red-600 text-white font-semibold mt-3 text-sm cursor-pointer active:scale-95'>Remove</button>
    </div>
        })}
      </div>
    </div>
  )
}

export default App

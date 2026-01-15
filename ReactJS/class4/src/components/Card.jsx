import React from 'react'

const Card = () => {
  return (
    <div key={idx} className='w-[23vw] rounded-xl py-8 px-8 flex items-center flex-col text-center  bg-white '>
        <img className='h-24 w-24 rounded-full object-cover object-center' src="https://images.pexels.com/photos/31121293/pexels-photo-31121293.jpeg" alt="" />
      <h1 className='text-2xl mt-2 font-bold text-black'>{elem.userName}</h1>
      <h5 className='text-lg  text-blue-500 font-semibold my-3'>{elem.userRole}</h5>
      <p className='text-sm font-medium leading-tight text-black'>{elem.userDesc}</p>
      <button onClick={(idx)=>{
        deleteHandler(idx)
      }}
      
      className='px-3 py-1 rounded bg-red-600 text-white font-semibold mt-3 text-sm cursor-pointer active:scale-95'>Remove</button>
    </div>
  )
}

export default Card

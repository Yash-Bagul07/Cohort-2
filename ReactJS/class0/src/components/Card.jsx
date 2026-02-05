import React from 'react'


const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-white text-red-500 border-5 border-amber-300 rounded m-5  px-10 py-7 w-fit h-fit'>
        <h1 className='text-5xl font-bold'>
            {props.user}, {props.age}
        </h1>
    </div>
  )
}

export default Card

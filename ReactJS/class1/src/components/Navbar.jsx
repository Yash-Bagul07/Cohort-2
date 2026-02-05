import React from 'react'

const Navbar = (props) => {
  return (
    <div className='bg-amber-950 text-amber-50 mb-1 text-xl flex items-center justify-between p-10'>
      <h2>{props.title}</h2>
      <div className='flex gap-20' >
        {props.links.map(function(elem, idx){
            return <h4 key={idx}>{elem}</h4>
        })}

      </div>
      
      
    </div>
  )
}

export default Navbar

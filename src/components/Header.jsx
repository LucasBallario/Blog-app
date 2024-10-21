import React from 'react'

export default function Header() {
  return (
    <>
    <div className='flex justify-evenly py-9'>
        <button className=''>
           <i className="fa-solid fa-bars text-3xl"></i> 
        </button>
        
        <img className='rounded-full size-16 ' src="public/v3_0924096.jpg " 
        alt="person" srcset="" />

    </div>

    <div className='text-center'>
        <h2 className='text-xl'>Discover</h2>
        <input type="search" placeholder='Search...' className='p-3  w-80 border border-slate-400 rounded-md my-9 bg-slate-100'/>
    </div>
    </>
    
  )
}

import github from "../assets/github.svg"
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-stone-200 flex justify-between items-center px-2 py-1'>
       <h1 className='text-sm'>Developed by Fixxoo</h1>
       <div>
        <img src={github} className='w-5' />
       </div>
    </div>
  )
}

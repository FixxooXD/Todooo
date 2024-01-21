import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='font-Oswald'>
    <div className='border-b-2 p-2 text-xl font-pops'>Todoss</div>
    <section className='px-4 flex flex-col justify-center items-center h-screen'>
      <p>Lets get your job done!!</p>  
      <Link to="/auth" className='border-2 w-36 flex justify-center items-center mt-4' >Get Signup</Link>
    </section>
    </div>
  )
}

export default Landing
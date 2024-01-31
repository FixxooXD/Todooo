import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer'

const Landing = () => {
  return (
    <div className='font-Oswald flex flex-col justify-between h-screen'>
    <div className='border-b-2 p-2 text-xl font-pops'>Todoss</div>
    <section className='px-4 flex flex-col mt-32 items-center h-screen'>
      <p className='text-2xl'>Lets get your job done!!</p>  
      <Link to="/auth" className='border-2 w-36 flex justify-center items-center mt-4' >Get Signup</Link>
    </section>
    <Footer />  
    </div>
  )
}

export default Landing
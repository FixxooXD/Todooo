import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
    <div className='border-2'>Landing</div>
    <Link to="/auth" >Get Signup</Link>
    </div>
  )
}

export default Landing
import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from './UserProfile'



const Nav = () => {

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    console.log(isAuthenticated)
     const  user = useSelector((state) => state.user.user.userData[0]);
  
  return (
    <div className='p-2 text-xl font-pops border-b-2 w-full flex items-center justify-between'>
       <h1>Todooo</h1>

       {
        isAuthenticated ? <UserProfile /> : null
       }

    </div>
  )
}

export default Nav
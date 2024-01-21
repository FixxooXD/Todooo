import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const UserProfile = () => {

    // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    // console.log(isAuthenticated)
     const  user = useSelector((state) => state.user.user.userData[0].userName);
     console.log(user)
  return (
     <div>
        <p className='text-sm'><FontAwesomeIcon icon={faUser} /><span className='mx-2'>{user}</span></p>
    </div>
  )
}

export default UserProfile
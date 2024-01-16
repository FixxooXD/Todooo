import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = (props) => {
    const {Components} = props
    const navigate = useNavigate();

    let isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    console.log(isAuthenticated)

     useEffect(() => {
       if(!isAuthenticated){
         navigate("/auth/login")
       }
     })
  return (
    <Components />
  )
}

export default ProtectedRoutes
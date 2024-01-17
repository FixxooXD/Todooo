import React from 'react'
import { useSelector } from 'react-redux';

export const Todos = () => {
  let userData = useSelector((state) => state.user.user.userData[0]);
  console.log(JSON.stringify(userData))
  return (
    <>
    <div>Todos</div>
    <div className='mt-4 px-4'>{JSON.stringify(userData)}</div>
    </>
  )
}

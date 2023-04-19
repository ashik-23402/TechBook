import React from 'react'
import logimg from '../assets/Images/login.jpg'
const LoginImg = () => {
  return (
    <div className='flex flex-col w-[40%] mx-12 justify-between'> 
    <p className="text-3xl mx-12 my-10" >Login To Your Account</p>

    <img src={logimg} alt=""
    className="mt-20 rounded-md opacity-60 "
    />
    </div>
  )
}

export default LoginImg
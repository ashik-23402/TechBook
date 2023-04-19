import React from 'react'

import simg from '../assets/Images/signup.jpg'

const SignUpImg = () => {
  return (
    <div className='flex flex-col w-[40%] mx-12 justify-between'>
     <p className="text-3xl mx-12 my-10" >Create Your Account</p>

      <img src={simg} alt="signup image"
      className="mt-20 rounded-md opacity-60 "
      />
    </div>
  )
}

export default SignUpImg
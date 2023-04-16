import React from 'react'
import InputText from './InputText'
import InputPass from './InputPass'
import Submitbtn from './Submitbtn'

const SignUpForm = () => {
  return (
    <div className='flex justify-center items-center mt-40
    bg-gradient-to-br from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.3)]
    rounded-lg backdrop-blur-0
     z-10 mr-20 h-[28rem] w-[50%]'>

     <form action="" className='space-y-5 w-[80%] ml-16'>

        <InputText/>
        <InputText/>
        <InputPass/>
        <InputPass/>
        <Submitbtn/>
        

     </form>




    </div>
  )
}

export default SignUpForm
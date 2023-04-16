import React from 'react'
import LoginForm from '../LoginForm'
import LoginImg from '../LoginImg'

const Login = () => {
  return (
    <div className='flex justify-between'>
    
        <LoginImg/>
        <LoginForm/>
    </div>
  )
}

export default Login
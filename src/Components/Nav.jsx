import React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'

const Nav = () => {

  const {currentUser,logout} = useAuth();


  
  return (
    
        
   <nav className="flex justify-between
   bg-gradient-to-tr from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.5)]
    backdrop-opacity-10 h-10">

    <Link to="/">
    <p className="p-1 italic text-xl font-semibold">TYS</p>
    </Link>

    {
      currentUser ? (
        <div className="flex space-x-2 p-1">
        <Link to="/">{currentUser.displayName}</Link>
        <p onClick={logout}>logout</p>
    </div>

      ): (
        <div className="space-x-2 p-1">
        <Link to="/signup">sign up</Link>
        <Link to="/login">login</Link>
    </div>
      )
    }

    


   </nav>
    
  )
}

export default Nav
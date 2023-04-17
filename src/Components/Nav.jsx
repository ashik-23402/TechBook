import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {


  
  return (
    
        
   <nav className="flex justify-between
   bg-gradient-to-tr from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.5)]
    backdrop-opacity-10 h-10">

    <Link to="/">
    <p className="p-1 italic text-xl font-semibold">TYS</p>
    </Link>
    <div className="space-x-2 p-1">
        <Link to="/signup">sign up</Link>
        <Link to="/login">login</Link>
    </div>
   </nav>
    
  )
}

export default Nav
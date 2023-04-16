import React from 'react'

const Nav = () => {


  
  return (
    
        
   <nav className="flex justify-between
   bg-gradient-to-tr from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.5)]
    backdrop-opacity-10 h-10">

    <p className="p-1 italic text-xl font-semibold">TYS</p>

    <div className="space-x-2 p-1">
        <a href="">sign up</a>
        <a href="">login</a>
    </div>
   </nav>
    
  )
}

export default Nav
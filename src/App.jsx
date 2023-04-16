import { useState } from 'react'
import Nav from './Components/Nav'
import Courses from './Components/Courses'
import SignUpForm from './Components/SignUpForm'
import LoginForm from './Components/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
     {/* <p className='text-red-600'>Ashik broh</p> */}
     <Nav/>
     <Courses/>
     {/* <SignUpForm/> */}
     {/* <LoginForm/> */}
     
    </div>
  )
}

export default App

import { useState } from 'react'
import Nav from './Components/Nav'
import Courses from './Components/Courses'
import SignUpForm from './Components/SignUpForm'
import LoginForm from './Components/LoginForm'
import Quiz from './Components/Quiz'
import Signup from './Components/Pages/Signup'
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import QuizPage from './Components/Pages/QuizPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
     {/* <p className='text-red-600'>Ashik broh</p> */}
     <Nav/>
     {/* <Courses/> */}
     {/* <SignUpForm/> */}
     {/* <LoginForm/> */}
     {/* <Quiz/> */}

     {/* <Signup/> */}
      {/* <Home/> */}
     {/* <Login/> */}
     <QuizPage/>

     
    </div>
  )
}

export default App

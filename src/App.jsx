import { useState } from 'react'
import Nav from './Components/Nav'
import Signup from './Components/Pages/Signup'
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import QuizPage from './Components/Pages/QuizPage'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Router>
      <Nav/>
      <Routes>

        
        <Route exact path='/' Component={Home}/>
        <Route exact path='/signup' Component={Signup}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/quiz' Component={QuizPage}/>
        
        </Routes>
      </Router>

     
    </div>
  )
}

export default App

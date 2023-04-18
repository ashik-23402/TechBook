import { useState } from 'react'
import Nav from './Components/Nav'
import Signup from './Components/Pages/Signup'
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import QuizPage from './Components/Pages/QuizPage'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Router>
     <AuthProvider>
      <Nav/>
      <Routes>

        
        <Route exact path='/' Component={Home}/>


        <Route exact path='/signup' element={<PublicRoute/>}>
            <Route exact path='/signup' element={<Signup/>}/> 
        </Route> 


        <Route exact path='/login' element={<PublicRoute/>}>
            <Route exact path='/login' element={<Login/>}/> 
        </Route> 


        <Route  path='/quiz' element={<PrivateRoute/>}>

            <Route exact path='/quiz/:name' element={<QuizPage/>}/> 
        
        </Route>

      
        
        </Routes>

        </AuthProvider>
      </Router>

     
    </div>
  )
}

export default App

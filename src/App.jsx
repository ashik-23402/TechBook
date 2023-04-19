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
import ScorePage from './Components/Pages/ScorePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Router>
     <AuthProvider>
      <Nav/>

       <div class="h-44
    w-44 bg-[rgb(255,255,255,0.3)] absolute -right-0 mt-3 
    rounded-[50%]"></div>

    <div class="h-44
    w-44 bg-[rgb(255,255,255,0.3)] absolute left-1 bottom-2
    rounded-[50%] m-2"></div>


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

        
        <Route  path='/score' element={<PrivateRoute/>}>

            <Route exact path='/score/:score' element={<ScorePage/>}/> 
        
        </Route>


      
        
        </Routes>

        </AuthProvider>
      </Router>

     
    </div>
  )
}

export default App

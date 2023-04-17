import React, { useState } from 'react'
import InputText from './InputText'
import Submitbtn from './Submitbtn'
import {useAuth} from '../Context/AuthContext'
import { Link , useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading] = useState();

  const navigate = useNavigate();


  const{login} = useAuth();


  async function handleSubmit(e){

    e.preventDefault();

    

    try{

      setError("");
      setLoading(true);
      await login(email,password);
      navigate("/");
      

    }catch(err){

      console.log(err);
      setLoading(false);
      setError("failed to login");

    }

  }



  const emailchangeHandler = (e)=>{

   
    const mail = e.target.value;
    setEmail(mail);

  }


  const passwordchangeHandler = (e)=>{

    
    const pass = e.target.value;
    setPassword(pass);

  }



  return (
    <div className='flex justify-center items-center mt-40
    bg-gradient-to-br from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.3)]
    rounded-lg backdrop-blur-0
     z-10 mr-20 h-[16rem] w-[50%]'>


        <form onSubmit={handleSubmit} className='space-y-5 w-[80%] ml-16'>

            <InputText type={"text"} placeholder={"Enter email"}
              changeHandler={emailchangeHandler}
            />
            <InputText type={"password"} placeholder={"Enter password"}
              changeHandler={passwordchangeHandler}
            />
            <Submitbtn disable = {loading}/>

            
        {
          error && <p>{error}</p>
        }

        </form>


     </div>
  )
}

export default LoginForm
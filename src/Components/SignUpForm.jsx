import React, { useState } from 'react'
import InputText from './InputText'
import Submitbtn from './Submitbtn'
import {useAuth} from '../Context/AuthContext'
import { Link , useNavigate } from 'react-router-dom'

const SignUpForm = () => {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpass,setConfirmpass] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading] = useState();

  const navigate = useNavigate();



  const{signup} = useAuth();


  async function handleSubmit(e){

    e.preventDefault();

    if(password !== confirmpass){
      return setError("password dont match");
    }

    try{

      setError("");
      setLoading(true);
      await signup(email,password,username);
      navigate("/");
      

    }catch(err){

      console.log(err);
      setLoading(false);
      setError("failed to signup");

    }

  }



  const namechangeHandler = (e)=>{

   
    const name = e.target.value;
    setUsername(name);

  }


  const emailchangeHandler = (e)=>{

   
    const mail = e.target.value;
    setEmail(mail);

  }

  const passwordchangeHandler = (e)=>{

    
    const pass = e.target.value;
    setPassword(pass);

  }

  const confirmpasswordchangeHandler = (e)=>{

    
    const pass = e.target.value;
    setConfirmpass(pass);

  }





  return (
    <div className='flex justify-center items-center mt-40
    bg-gradient-to-br from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.3)]
    rounded-lg backdrop-blur-0
     z-10 mr-20 h-[28rem] w-[50%]'>

     

     <form onSubmit={handleSubmit} className='space-y-5 w-[80%] ml-16'>

        <InputText type={"text"} placeholder={"Enter Name"} 
        changeHandler = {namechangeHandler}/>
        <InputText type={"text"} placeholder={"Enter Email"}
          changeHandler = {emailchangeHandler}
        />
        <InputText type={"password"} placeholder={"Enter password"}
          changeHandler = {passwordchangeHandler}
        />
        <InputText type={"password"} placeholder={"Confirm Password"}
          changeHandler={confirmpasswordchangeHandler}
        />
        
        <Submitbtn disable = {loading}/>

        {
          error && <p>{error}</p>
        }
        

     </form>




    </div>
  )
}

export default SignUpForm
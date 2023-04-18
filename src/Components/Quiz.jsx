import { useNavigate, useParams } from "react-router-dom";
import Option from "./Option";
import React, { useEffect } from 'react'
import { useState } from "react";

const Quiz = () => {

  const {name} = useParams();

  const apikey = "CrwLB1HCUPFSaF7OmjoXV9h0ORYzPqOrUjwBIAXx";
   
  const Navigate = useNavigate();
 

 

  const [data,setData] = useState(null);
  const [quizno,setQuizno] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${apikey}&category=${name}`);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const btnchange = ()=>{

    if(quizno === 10){
      
      return Navigate("/"); 
    }

    setQuizno(quizno+1);

  }




  if (!data) {
    return <p>Loading...</p>;
  }

  console.log(data[quizno].answers.answer_a);
  console.log(quizno);


  return (
    <>
    <div className="flex flex-col  m-20 w-[70%]
    bg-gradient-to-br from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.3)]
    rounded-lg backdrop-blur-0
     z-10">

        <p className="text-3xl font-semibold"> {data[quizno].question} </p>
        <Option ans = {data[quizno].answers.answer_a}/>
        <Option ans = {data[quizno].answers.answer_b}/>
        <Option ans = {data[quizno].answers.answer_c}/>
        <Option ans = {data[quizno].answers.answer_d}/>



    </div>
    <button onClick={btnchange} className="p-5 bg-green-500 rounded-lg ml-[80%]
   font-semibold"> Next Question</button>


    </>
  )
}

export default Quiz
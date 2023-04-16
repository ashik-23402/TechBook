import Option from "./Option";

import React from 'react'

const Quiz = () => {
  return (
    <>
    <div className="flex flex-col  m-20 w-[70%]
    bg-gradient-to-br from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.3)]
    rounded-lg backdrop-blur-0
     z-10">

        <p className="text-3xl font-semibold">How to declare JavaScript variables ? </p>
        <Option/>
        <Option/>
        <Option/>
        <Option/>



    </div>
    <button className="p-5 bg-green-500 rounded-lg ml-[80%]
   font-semibold"> Next Question</button>


    </>
  )
}

export default Quiz
import React from 'react'
import { useParams } from 'react-router-dom'

const ScorePage = () => {

    const{score} = useParams();


  return (
    <div
    className=' 
    text-3xl m-44 mx-80'>
    your score is {score} </div>
  )
}

export default ScorePage
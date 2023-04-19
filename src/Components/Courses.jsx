import React from 'react'
import Course from './Course'
import { Link } from 'react-router-dom'

const Courses = () => {


  const courseList = ["Linux","DevOps","Docker"]

  const singleCourse = courseList.map(cc => <Course coursename={cc}/>);

  return (
    // <Link to={`/quiz/${sin}`}>
    <div className="  flex justify-center flex-wrap m-12
   
    bg-gradient-to-br from-[rgb(255,255,255,0.7)] to-[rgb(255,255,255,0.3)]
    rounded-lg backdrop-blur-0
     z-10">
     
      {
        courseList.map(cc => <Link to={`/quiz/${cc}`} key={cc}><Course coursename={cc}/></Link>)
      }
      
    
    </div>
    // </Link>

  )
}

export default Courses
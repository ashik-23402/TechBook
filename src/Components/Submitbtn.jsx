import React from 'react'

const Submitbtn = ({disable}) => {
  return (
    <input disabled={disable} type="submit" value="Submit Now"
            className="h-10 w-[80%] rounded-md bg-green-400 cursor-pointer"/>
  )
}

export default Submitbtn
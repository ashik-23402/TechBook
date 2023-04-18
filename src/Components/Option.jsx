import React from 'react'

const Option = ({ans}) => {
  if(!ans) return null;
  return (
    <div className='m-5  border-2
   w-[40%]  bg-gradient-to-br from-[rgb(255,255,255,0.9)]'>

      <input type="checkbox"/>
      <p className="inline text-lg font-semibold">{ans}</p>


    </div>
  )
}

export default Option
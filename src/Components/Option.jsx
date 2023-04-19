import React from 'react'

const Option = ({ans,handler,prev}) => {
  if(!ans) return null;
  return (
    <div className='m-5  border-2
   w-[40%]  bg-gradient-to-br from-[rgb(255,255,255,0.9)]'>

      <input className='m-2' type="radio" name="gender"  value={ans}
        checked={prev === ans}
        onChange={handler}
      />
      <p className="inline text-lg font-semibold">{ans}</p>


    </div>
  )
}

export default Option
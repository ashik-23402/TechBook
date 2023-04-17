import React from 'react'

const InputText = ({type,placeholder,changeHandler=null}) => {
  return (
    <input type={type}  placeholder={placeholder} 
        className="h-10 w-[80%] rounded-md"
        onChange={changeHandler}
    />
  )
}

export default InputText
import React, { useRef } from 'react'

const UnControlled = () => {
const inputRef=useRef();
const handleSubmit=(e)=>{
    e.preventDefault();
     const name=inputRef.current.value;
    console.log(name)
//     const dataValue=document.querySelector(#inputName)
//     console.log(dataValue)
}

  return (
    
    <div>
        <h1>UnControlled Component

        </h1>
    <form onSubmit={handleSubmit}>
    <input type="text"  ref={inputRef} id="inputName" placeholder='Enter your Name'/>
    <button>Submit</button>
    {name}
    </form>
    </div>
  )
}

export default UnControlled
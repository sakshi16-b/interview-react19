import React, { useState } from 'react'
import '../Hooks.css'

const Counter = () => {
    // console.log(useState());
    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
        console.log("inner-count",count)
    }
            console.log("outer-count",count)

  return (
    <div className='container state-container' style={{textAlign:"center"}}>
    <button onClick={handleIncrement}>Increment</button>
    <p>{count}</p>
    </div>
  )
}

export default Counter;
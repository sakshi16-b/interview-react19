import React from 'react'
import  {useState } from "react";


const State = () => {
  console.log("Parent Component render")
    const [count,setCount]=useState(0)
    const handleBtnSubmit=()=>{
        setCount(count+1)
     }
  return (
    <>
    <div className='main-div'>
        <h1>{count}</h1>
        <button onClick={handleBtnSubmit}>Increment</button>
    </div>
    <ChildComponent count={count}/>
    </>
  )
}

export default State;

export const ChildComponent=({count})=>{

console.log('child component render')
  return(

    <h1>Child Component :{count}</h1>
    
  );
};
export const SiblingComponent=()=>{

console.log('Sibling component render')
  return(

    <h1>Sibling Component</h1>
    
  );
};

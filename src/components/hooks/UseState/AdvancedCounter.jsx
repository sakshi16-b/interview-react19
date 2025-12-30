import React, { useState } from 'react'
import '../Hooks.css'

const AdvancedCounter = () => {
    const [count, setCount] = useState(0)
    const [value,setValue] =useState(0)

    const handleIncrement=()=>{
        setCount(count+value);
    }
    const handleDecrement=()=>{
        setCount(count-value);
    }
    return (
        <div>
            <h1>AdvancedCounter</h1>
            <p>Incremented Value is {count}</p>
            <label>Step:
            <input type='number' value={value} onChange={(e)=>setValue(Number(e.target.value))}/>

            </label>
            <div className='grid grid-three-cols'>
            <button onClick={handleIncrement}disabled={count>=100}>Increment</button>
            <button onClick={handleDecrement} disabled={count<=0}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            </div>

        </div>
    )
}

export default AdvancedCounter
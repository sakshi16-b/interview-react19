import React, { useEffect, useState } from 'react'

const Challenge = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState()

useEffect(()=>{
    document.title=`Count: ${count}`
},[count])

    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <div className='container effect-container'>
            <h1>useEffect Challenge</h1>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Name: </p> {name}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Challenge
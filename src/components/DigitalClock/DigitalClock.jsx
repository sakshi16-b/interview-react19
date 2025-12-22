import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    const [time, setTime] = useState('')
    useEffect(() => {
        const timer = setTime(new Date().toLocaleTimeString("en-US", {
            "hour":"2-digit",
            "minute": "2-digit",
            "seconds": "2-digit",
             "12-hr": true

        }))
        return (() => clearInterval(timer))
    }, [])




    return (
        <div><h1 style={{fontSize:20}}>{time}</h1></div>
    )
}

export default DigitalClock
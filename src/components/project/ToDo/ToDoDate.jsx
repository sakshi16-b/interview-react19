import React from 'react'
import { useState,useEffect } from 'react'

const ToDoDate = () => {
    const [dateTime, setDateTime] = useState('')
    const getDateTime = () => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString()
            // setDateTime(formattedDate-formattedTime)
            setDateTime(`${formattedDate}-${formattedTime}`)
    
        }
        useEffect(() => {
        const interval = setInterval(() => {
            getDateTime();
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <h1 className='date-time' style={{ fontSize: 20 }}>{dateTime}</h1>

        </div>
    )
}

export default ToDoDate
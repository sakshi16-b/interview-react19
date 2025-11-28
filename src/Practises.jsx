import React from 'react'

const Practises = () => {
    const students = [2,1,5]
    return (
        <>
            <p>{students.length && "No Students Found"}</p>
            <p>Number of Students:{students.length}</p>
        </>
    )
}

export default Practises
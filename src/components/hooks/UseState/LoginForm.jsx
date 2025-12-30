import React, { useState } from 'react'

const LoginForm = () => {
    const[userName,setUserName]=useState()
    const[password,setPassword]=useState()


    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const loginData={
            userName,
            password
        }
        console.log(loginData)

    }
    return (
        <div className='container'>
            <div className='card'>
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor='username'>
                        <b>UserName</b>
                    </label>
                    <input type="text" name='username' onChange={(e)=>setUserName(e.target.value)} required autoComplete='off' />
                    <label htmlFor='password'>
                        <b>Password</b>
                    </label>
                    <input type="text" name='password'onChange={(e)=>setPassword(e.target.value)} required autoComplete='off' />
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm
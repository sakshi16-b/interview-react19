import React, { useState } from 'react'
import './index.css'


const RegistrationReact = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""

    });
const handleInputChange = (e) => {
        const { name, value } = e.target
        // setUser((prev) => ({ ...prev, [name]: value }));
        setUser((prev)=>({...prev,[name]:value}))
};
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
         console.log(user)
        // const formData = {
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     phoneNumber
        // }
       
    }
    
    
    return (
        <>

            <form onSubmit={handleFormSubmit}>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please fill in the form to create an account</p>

                    <label htmlFor='firstName'>
                        <b>First Name</b>
                    </label>
                    <input type="text"
                        name="firstName"
                        placeholder='Enter FirstName'
                        required
                        value={user.firstName}
                        onChange={handleInputChange} />

                    <label htmlFor='lastName'>
                        <b>Last Name</b>
                    </label>
                    <input type="text"
                        name="lastName"
                        placeholder='Enter LastName'
                        required
                        value={user.lastName}
                        onChange={handleInputChange} />


                    <label htmlFor='email'>
                        <b>Email</b>
                    </label>
                    <input type="text"
                        name="email"
                        placeholder='Enter Email'
                        required
                        value={user.email}
                        onChange={handleInputChange} />

                    <label htmlFor='password'>
                        <b>Password</b>
                    </label>
                    <input type="text"
                        name="password"
                        placeholder='Enter Password'
                        required
                        value={user.password}
                        onChange={handleInputChange} />


                    <label htmlFor='phoneNumber'>
                        <b>Phone Number</b>
                    </label>

                    <input type="text"
                        name="phoneNumber"
                        placeholder='9896778889'
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange} />


                    <p>By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>Terms and Policy</a></p>

                    <div className='clear-fix'>
                        <button type='submit' className='btn'>
                            Sign Up
                        </button>

                    </div>
                </div>

                <p>
                    <span>  Hello, my name is {user.firstName} {user.lastName}.
                        My email address is {user.email},
                        and my phone number is {user.phoneNumber}.</span>
                </p>


            </form>
        </>

    )
}


export default RegistrationReact;
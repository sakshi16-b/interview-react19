import React, { useState } from 'react'
import './index.css'


const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const handleInputChange = (e) => {
        //avoid this method 

        const { name, value } = e.target
        switch (name) {
            case "firstname": {
                setFirstName(value)
                break;
            }
            case "lastname": {
                setLastName(value)
                break;
            }
            case "email": {
                setEmail(value)
                break;
            }
            case "password": {
                setPassword(value)
                break;
            }
            case "phone": {
                setPhoneNumber(value)
                break;
            }
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = { firstName, lastName, email, password, phoneNumber }
        console.log(formData)
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
                        name="firstname"
                        placeholder='Enter FirstName'

                        required
                        value={firstName}
                        onChange={handleInputChange} />

                    <label htmlFor='lastName'>
                        <b>Last Name</b>
                    </label>
                    <input type="text"
                        name="lastname"
                        placeholder='Enter LastName'
                        required
                        value={lastName}
                        onChange={handleInputChange} />


                    <label htmlFor='email'>
                        <b>Email</b>
                    </label>
                    <input type="text"
                        name="email"
                        placeholder='Enter Email'
                        required
                        value={email}
                        onChange={handleInputChange} />

                    <label htmlFor='password'>
                        <b>Password</b>
                    </label>
                    <input type="text"
                        name="password"
                        placeholder='Enter Password'
                        required
                        value={password}
                        onChange={handleInputChange} />


                    <label htmlFor="phoneNumber">
                        <b>Phone Number</b>
                    </label>

                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="9896778889"
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>Terms and Policy</a></p>

                    <div className='clear-fix'>
                        <button type='submit' className='btn'>
                            Sign Up
                        </button>

                    </div>
                </div>

                <p>
                    Hello, my name is {firstName} {lastName}.
                    My email address is {email},
                    and my phone number is {phoneNumber}.
                </p>


            </form>
        </>

    )
}

export default RegistrationForm;
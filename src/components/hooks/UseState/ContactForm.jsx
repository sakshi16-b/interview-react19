import React, { useState } from 'react'

const ContactForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const onHandleFormSubmit = (e) => {
        e.preventDefault();
        const contactformData={
            userName,
            password,
            message
        }
console.log(contactformData)

    }

    return (
        <div className='container'>
            <div className='card'>
                <h1>Contact Form</h1>

                <form onSubmit={onHandleFormSubmit}>
                    <label htmlFor='username'>
                        <b> UserName</b>
                    </label>
                    <input type="text" onChange={(e) => setUserName(e.target.value)} required />

                    <label htmlFor='password'>
                        <b>Password</b>
                    </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor='message'>
                        <b> Message</b>
                    </label>
                    <textarea
                        rows="10"
                       onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Send Message</button>


                </form>
            </div>
        </div>
    )
}

export default ContactForm
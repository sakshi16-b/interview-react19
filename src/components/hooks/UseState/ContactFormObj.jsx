import React, { useState } from 'react'

const ContactFormObj = () => {
    const [contacts, setContacts] = useState({
        username: '',
        password: '',
        message: ''
    })


    const handleInputChange = (e) => {
        const { name,value } = e.target
        setContacts((prev)=>({...prev,[name]:value}))

    }

    const onHandleFormSubmit = (e) => {
        e.preventDefault();
        
        console.log(contacts)

    }
    return (
        <div className='container'>
            <div className='card'>
                <h1>Contact Form</h1>

                <form onSubmit={onHandleFormSubmit}>
                    <label htmlFor='username'>
                        <b> UserName</b>
                    </label>
                    <input type="text" 
                    value={contacts.username} 
                    name="username" onChange={handleInputChange}
                     required />

                    <label htmlFor='password'>
                        <b>Password</b>
                    </label>
                    <input type="text"
                     name="password"
                     value={contacts.password}
                      onChange={handleInputChange} 
                      required />
                    <label htmlFor='message'>
                        <b> Message</b>
                    </label>
                    <textarea
                        rows="10"
                        name="message"
                        value={contacts.message}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Send Message</button>


                </form>
            </div>
        </div>
    )
}

export default ContactFormObj;
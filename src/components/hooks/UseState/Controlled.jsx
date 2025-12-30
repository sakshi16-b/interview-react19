import React from 'react'
import { useState } from 'react'

const Controlled = () => {
    const [name, setName] = useState('')
    
    const handleChange = (event) => {
        setName(event.target.value);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
               alert(name) ;


    }


    return (
        <div>
            <section className='container state-container'>
                <h1>Controlled Component</h1>

                <form onSubmit={handleSubmit} >
                    <label>Name:<input id="inputName" type='text' value={name}
                        onChange={handleChange} /> </label>
                    <br />
                    <button type='submit' className='state-button'>Submit</button>
                    {name}
                </form>
            </section>
        </div>
    )
}

export default Controlled;
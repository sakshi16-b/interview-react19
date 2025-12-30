import React from 'react'

const UnControlled = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const dataValue = document.querySelector("#inputName").value
        console.log(dataValue);

    }
    return (
        <div>
            <section className='container state-container'>
                <h1>UnControlled Component</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:<input id="inputName" name='name' type='text' /> </label>
                    <br />
                    <button type='submit' className='state-button'>Submit</button>




                </form>
            </section>
        </div>
    )
}

export default UnControlled
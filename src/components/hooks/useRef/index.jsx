import React, { useRef } from 'react'

const UseRef = () => {

  const username = useRef()
  const password = useRef()


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value)
    console.log(password.current.value)


  }
  return (
    <div>
      <h1>
        useRef Hooks
      </h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="username" ref={username} />
        <br />
        <input type='text' id="password" ref={password} />
        <br />
        <button>Submit</button>

      </form>

    </div>
  )
}

export default UseRef
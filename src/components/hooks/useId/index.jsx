import React, { useId } from 'react'

const UseId = () => {
    const username=useId();
    const password=useId();

  return (
    <form>
        <div>
        <label htmlFor={username}>UserName</label>
        <input type="text" id={username} name='name'/>
        </div>
        <div>
        <label htmlFor={password} >Password</label>
        <input type="text" id={password} name='password'/>
        </div>

    </form>
   

  )
}

export default UseId;
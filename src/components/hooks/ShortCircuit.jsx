import { useState } from 'react';
import './Hooks.css'


const ShortCircuitExample = () => {
    const [isloggedIn, setIsLoggedIn] = useState(true)
    const [user,setUser]=useState('')
    return (
        <section className='container short-container'>
            <h1>Welcome to Short Circuit Evaluation!</h1>
            {
                isloggedIn && <p>You are logged in!</p>
            }

           {
            user? <p>Hello {user}</p>:<p>Please login</p>

           }
           {/* {!user ? <p>Please Signup</p> : null} */}
           
            <div className='grid-three-cols'>
                <button onClick={()=>setIsLoggedIn(!isloggedIn)}>Toggle Login State</button>
                <button onClick={()=>setUser("Sakshi Bisht")}>Set User</button>
                <button onClick={()=>setUser("")}>Clear User</button>
                

            </div>
        </section>
    )
}

export default ShortCircuitExample;
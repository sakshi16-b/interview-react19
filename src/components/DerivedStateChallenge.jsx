
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 },
//     { name: "Charlie", age: 20 },
//     { name: "Alex", age: 45 }

import { useState } from "react"



// ]

// Using useState HOOK
const DerivedStateChallenge = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 35 },
        { name: "Charlie", age: 20 },
        { name: "Alex", age: 45 }
    ]);

    return (
        <>
            <div><h1>DerivedStateChallenge </h1></div>
            <br/>
            <ul>{
                users.map((user, index) => (
                    <li key={index}>{user.name}- {user.age} yrs old</li>

                ))
            }
            </ul>
        </>
    )
}

export default DerivedStateChallenge
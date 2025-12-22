import { useState } from "react"

const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: "Sam", age: 28 },
        { name: "Peter", age: 28 },
        { name: "Alex", age: 28 },
        { name: "Priya", age: 38 },
    ]);

    const userCount=users.length
    const averageAge= users.reduce((accum,currElem)=>accum+currElem.age,0)/userCount;

return(
    <>
    <ul>
        {
            users.map((currElem,index)=>{
                return(
                    <li key={index}>{currElem.name} is {currElem.age} years old</li>
                )
            })
        }

    </ul>
    <h1>UserCount is {userCount}</h1>
        <h1>Average Count is {averageAge}</h1>

    
    
    </>

)
}
export default DerivedState;
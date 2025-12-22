import { useState } from "react";

const LiftStateUp = () => {
        const [inputValue, setInputValue] = useState('')

    return (
        //passing state as a props to sibling Component.
        <>
            <InputComponent  inputValue={inputValue} setInputValue={setInputValue}/>
            <DisplayComponent inputValue={inputValue} />/
        </>
    )
}
export default LiftStateUp;


export const InputComponent = ({inputValue,setInputValue}) => {
    return (
        <>
        <input type="text" onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Enter your Name" />
            {/* <button>Submit</button> */}
            </>

    )
}
export const DisplayComponent = ({inputValue}) => {
        // const [inputValue, setInputValue] = useState('')//we can't display inputvalue here so we will lift state
        //to parent Component

    return (
        <h1>Input Value is:{inputValue}</h1>
    )
}
import React from 'react'

const EventProps = () => {

    const handleWelcomeUser = (user) => {
        console.log("welcome",user)
        alert("Welcome", user);
 }
function handleHover(){
    console.log("hover function called")
    alert("hey Hover function")
}


    return (
        <>
            <WelcomeUser
                onClick={() => handleWelcomeUser("Sakshi")}
                onMouseEnter={handleHover} />
        </>
    )
}
export const WelcomeUser=(props)=>{
    const handleGreeting=()=>{
        console.log("greeting function called")
alert("hI USER");
    }
    return(
        <>
    <button onClick={props.onClick}>Click</button>
        <button onClick={props.onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )

}
export default EventProps
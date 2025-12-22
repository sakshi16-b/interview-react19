import  '../components/EV.css'

export const EventHandling = () => {
    function handleButtonClick(){
        alert("I am called from EV handling component")
    }

    
    // const handleButtonClick=()=>{
    //     alert("I am called from Event handling Component")
    // }
    return (
        <>
        <button onClick={handleButtonClick}>Click Me</button>
        </>
    )
}

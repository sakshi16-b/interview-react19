import React from 'react'
const EventPropagation = () => {

    const handleGrandParent = (event) => {
                // event.stopPropagation()
        console.log("GrandParent Clicked")
    }
    const handleParentClick = (event) => {
                // event.stopPropagation()

        console.log("Parent Clicked")
    }
    const handleChildClick = (event) => {
        console.log(event)
        event.stopPropagation()
        console.log("Child Clicked")
    }


    return (
        <section className='main-div'>
            <div className='g-div' onClickCapture={handleGrandParent}>
                <div className='p-div' onClickCapture={handleParentClick}>
                    <button className='c-div' onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>

            </div>

        </section>
    )
}

export default EventPropagation
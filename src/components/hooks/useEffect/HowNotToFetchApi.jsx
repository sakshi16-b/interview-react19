import React, { useEffect, useState } from 'react'
const URL = "https://jsonplaceholder.typicode.com/posts"

const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState([])

//should not use without useEffect b/c it will go on infinite loop in network tab
        // fetch(URL)
        //     .then((res) => res.json())
        //     .then((data) => setApiData(data))
        //     .catch((error) => console.log(error)
        //     )
    



    return (
        <div className='container effect-container'>
            <h1>Fetch Api</h1>
            <ul>
                {
                    apiData.map((currdata) => (
                        <li key={currdata.id}>
                            <b>{currdata.title}</b></li>
                    ))

                }
            </ul>
        </div>
    )
}

export default HowNotToFetchApi;
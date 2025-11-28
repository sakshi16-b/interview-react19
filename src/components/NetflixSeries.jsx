import React from 'react'

const NetflixSeries = () => {
    const name = "Queen of Tears"
    const rating = "8.2"
    const age = "19"
    const summary = "Queen of Tears is a Korean romantic melodrama that follows the intense, emotional journey of Hong Hae-in, a powerful heiress (Queen of Queens Department Store), and Baek Hyun-woo,her husband and the legal director of her family’s empire."
    const returnGenre = () => {
        const genre = "RomCom";
        return genre;

    }

    //  let canWatch="Not Available";
    //  if(age>=18)canWatch="Watch Now"
    const canWatch = () => {
        if (age >= 18) return "Watch Now"
        return "Not Available"
    }

 return (

        <>
            <div>
                <img src='./qot.png' alt="qot.png" height="20%" width="40%" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating:{rating}</h3>
            <p>Summary:{summary}</p>
            <p>Genre: {returnGenre()}</p>
            {/* <button>{age > 18 ?"Watch Now":"NA"}</button> */}
            <button>{canWatch()}</button>
        </>

    )
}




export default NetflixSeries;


export const Footer=()=>{
    return <p>@Copyright</p>
}
export const Header=()=>{
    return <p>menu items</p>
}
import React from 'react'
import SeriesData from '../api/seriesData.json';
import SeriesCard from './SeriesCard';
//  import '../components/Netflix.css'
import '../components/Netflix.module.css'

const NetflixSeries = () => {
    return (
        
            <ul className='grid grid-three--cols'>
                {SeriesData.map((currEle) => (
                        <SeriesCard key={currEle.id} currEle={currEle}/>) )}
                    </ul>
    
    )
}

export default NetflixSeries;



import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
export default function SideBar(props) {
    return (
        <div className="w-100 side-bar">
            <button onClick={() => props.onSortByHighestPopularity()} className="dropdown-item" type="button"> Highest Popularity</button>
            <button onClick={() => props.onSortByLowestPopularity()} className="dropdown-item" type="button">Lowest Popularity</button>
            <button onClick={() => props.onFilterCategory('top_rated')} className="dropdown-item" type="button"> <FontAwesomeIcon icon={faStar} style={{ color: 'white' }} /> Top Rated</button>
            <button onClick={() => props.onFilterCategory('now_playing')} className="dropdown-item" type="button"><FontAwesomeIcon icon={faPlay} style={{ color: 'white' }} /> Current Playing</button>
            {/* <button className="dropdown-item" type="button">Another action</button> */}
        </div>
    )
}

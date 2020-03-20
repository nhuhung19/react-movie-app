import React from 'react'

export default function Filter(props) {
    return (
        <div>
            <button onClick={() => props.onSortByHighestPopularity()} className="dropdown-item" type="button">Highest Popularity</button>
            <button onClick={() => props.onSortByLowestPopularity()} className="dropdown-item" type="button">Lowest Popularity</button>
            <button onClick={() => props.onFilterCategory('top_rated')} className="dropdown-item" type="button">Top Rated</button>
            <button onClick={() => props.onFilterCategory('now_playing')} className="dropdown-item" type="button">Current Playing</button>
            <button className="dropdown-item" type="button">Another action</button>
            
        </div>
    )
}

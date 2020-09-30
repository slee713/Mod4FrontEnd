import React from 'react'

const Sort = props => {
    return (
        <div className='filter-rest-div'>
            <label>Sort By: </label>
            <select onChange={(e)=> props.sortBy(e.target.value)} >
                <option disabled selected value> -- Select Option -- </option>
                <option value="ratingASC">Rating (Lowest to Highest)</option>
                <option value="ratingDESC">Rating (Highest to Lowest)</option>
                <option value="priceASC">Price (Lowest to Highest)</option>
                <option value="priceDESC">Price (Highest to Lowest)</option>
                <option value="alphaASC">Alphabetically (A-Z)</option>
                <option value="alphaDESC">Alphabetically (Z-A)</option>
            </select>

        </div>
    )
}

export default Sort
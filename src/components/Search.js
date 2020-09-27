import React from 'react'
import './Search.css'


const Search = props => {
    return (
        <div className='image-div'>
            <h1>Search by Location</h1>
        </div>
    )
}

export default Search



{/* <form onSubmit={(e)=> props.search(e)}>
<select name="searchBy">
    <option disable selected value> -- Search By --</option>
    <option value="restName">Restaurant Name</option>
    <option value="cuisine">Cuisine</option>
    <option value="location">Location</option>
</select>
<input type="text" name="searchContent"/>
<button type="submit">Search</button>
</form> */}



import React from 'react'




function Filter(props){
    const [ value, setValue ] = React.useState(0)

    const handleChange = (value) => {
        let cuisineId = parseInt(value)
        setValue(cuisineId)
        props.cuisineFilter(cuisineId)
    }

    
    return(
      <div className='filter-rest-div'>
        <label>Filter By Cuisine </label>
        
          <select onChange={(e) => handleChange(e.target.value)} value={props.cuisines}>
            <option disabled selected value>-- Select Cuisine --</option>
            <option value="0">All</option>
            <option value='1'>American</option>
            <option value ='1035'>Afghan</option>
            <option value='25'>Chinese</option> 
            <option value='45'>French</option>
            <option value='156'>Greek</option>
            <option value='148'>Indian</option>
            <option value='55'>Italian</option>
            <option value='67'>Korean</option>
            <option value='73'>Mexican</option>
            <option value='137'>Middle Eastern</option>
            <option value='139'>Pakistani</option>
            <option value='83'>Seafood</option>
            <option value='95'>Thai</option>
            <option value='142'>Turkish</option>
            <option value='308'>Vegetarian</option>
          </select>
      
      </div>
    )
    
}

export default Filter

import React from 'react'

const RestCard = props => {

    const {name, location, rating, thumb} = props.restaurant

    return(
        <div>
            <h2>{name}</h2>
            <img src={thumb}/>
            <h3>Rating: {rating}</h3>
            <p>{location.address}</p>
        </div>
    )
}

export default RestCard
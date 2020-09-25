import React, { Component } from 'react'
import RestCard from '../components/RestCard'

const RestCollection = props => {

    return(
        <div>
            {
                props.restaurants.map(restaurant => 
                <RestCard 
                    restaurant={restaurant} 
                    key={restaurant.id}
                />)
            }
        </div>
    )
}

export default RestCollection
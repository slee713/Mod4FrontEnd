import React, { Component } from 'react'
import RestCard from '../components/RestCard'
import './RestCollection.css'

const RestCollection = props => {

    return(
        <div>
            <div className="container">
            {
                props.restaurants.map(restaurant => 
                <RestCard 
                    status={props.status}
                    restaurant={restaurant} 
                    key={restaurant.id}
                />)
            }
            </div>
            
        </div>
    )
}

export default RestCollection
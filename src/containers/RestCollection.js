import React, { Component } from 'react'
import RestCard from '../components/RestCard'
import './RestCollection.css'

const RestCollection = props => {

    return(
        <div>
            <button onClick={() => props.nextPage()}>Next Page</button>
            <button onClick={props.previousPage} > Previous Page</button>
            <div className="container">
            {
                props.restaurants.map(restaurant => 
                <RestCard 
                    restaurant={restaurant} 
                    key={restaurant.id}
                />)
            }
            </div>
            
        </div>
    )
}

export default RestCollection
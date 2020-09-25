import React, { Component } from 'react'
import RestCard from '../components/RestCard'

const RestCollection = props => {

    return(
        <div>
            <button onClick={() => props.nextPage()}>Next Page</button>
            <button onClick={props.previousPage} > Previous Page</button>
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
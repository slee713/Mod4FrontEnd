import React from 'react'
import RestCard from '../components/RestCard'
import './RestCollection.css'

const RestCollection = props => {

    return(
        <div>
            <div className="container">
            {
                props.restaurants.map(restaurant => 
                    <div className="card">
                        <RestCard 
                            status={props.status}
                            restaurant={restaurant} 
                            key={restaurant.id}
                        />
                    </div>)
            }
            </div>
            
        </div>
    )
}

export default RestCollection
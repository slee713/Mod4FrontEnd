import React, { Component } from 'react'
import RestCollection from './RestCollection'
import SortFilter from '../components/SortFilter'
import RestMap from './RestMap'
import RestDesc from '../components/RestDesc'


const RestContainer = props => {
    
    return(
        <div>
            { null ? <RestCollection /> : <RestMap />}
        </div>
    )
    
}

export default RestContainer
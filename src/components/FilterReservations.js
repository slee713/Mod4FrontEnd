import React from 'react'

const FilterReservations = props => {
    return(
        <div>
            <select onChange={(e)=>props.filter(e.target.value)}>
                <option value='all'>All Reservations</option>
                <option value='past'>Past Reservations</option>
                <option value='today'>Today's Reservations</option>
                <option value='upcoming'>Upcoming Reservations</option>
            </select>
        </div>
    )
}

export default FilterReservations
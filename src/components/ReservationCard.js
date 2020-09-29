import React, {useState} from 'react'

const ReservationCard = props => {
    return(
        <div>
            <h1>{props.reservation.date}</h1>
        </div>
    )
}

export default ReservationCard
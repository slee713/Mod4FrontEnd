import React, { useEffect } from 'react'
import './Reservation.css'
import ReservationCard from '../components/ReservationCard'

const Reservation = props => {
    const [reservations, setReservations] = React.useState([])

    useEffect(()=> {
        let config = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }
        fetch(props.baseUrl+'users/user', config)
        .then(res => res.json())
        .then(userData => setReservations(userData.reservations))
    }, [])
    
    return(
        <div className="reservationContainer">
            <h1>My Reservations</h1>
            {reservations.map(r => 
                <ReservationCard key={r.id} reservation={r} baseUrl={props.baseUrl}/>
                )}
        </div>
    )
}

export default Reservation
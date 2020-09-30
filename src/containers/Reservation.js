import React, { useEffect } from 'react'
import './Reservation.css'
import ReservationCard from '../components/ReservationCard'
import FilterReservations from '../components/FilterReservations'

const Reservation = props => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    let todaysDate = yyyy + '-' + mm + '-' + dd

    const [reservations, setReservations] = React.useState([])
    const [filtered, setFiltered] = React.useState([])

    useEffect(()=> {
        let config = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }
        fetch(props.baseUrl+'users/user', config)
        .then(res => res.json())
        .then(userData => {
            setReservations(userData.reservations.sort((a,b) => a.date.localeCompare(b.date)))
            setFiltered(userData.reservations.sort((a,b) => a.date.localeCompare(b.date)))
        })
    }, [])

    let removeReservations=(id)=>{
        let updatedReservations = reservations.filter(r => r.id !== id)
        setReservations(updatedReservations)
    }

    const filter = (value) => {
        switch (value){
            case 'all':
                setFiltered(reservations)
                break
            case 'past':
                setFiltered(reservations.filter(r => r.date < todaysDate))
                break
            case 'today':
                setFiltered(reservations.filter(r => r.date === todaysDate))
                break
            case 'upcoming':
                setFiltered(reservations.filter(r => r.date > todaysDate))
                break
        }
    }
    
    return(
        <div className="reservationContainer">
            <h1>My Reservations</h1>
            <FilterReservations filter={filter}/>
            {filtered.map(r => 
                <ReservationCard key={r.id} reservation={r} baseUrl={props.baseUrl} delete={removeReservations}/>
                )}
        </div>
    )
}

export default Reservation
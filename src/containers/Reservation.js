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
    const [filter, setFilter] = React.useState('all')

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
        })
    }, [])

    let removeReservations=(id)=>{
        let updatedReservations = reservations.filter(r => r.id !== id)
        setReservations(updatedReservations)
    }

    let displayRes = () => {
        switch (filter){
            case 'all':
                return reservations
                break
            case 'past':
                return reservations.filter(r => r.date < todaysDate)
                break
            case 'today':
                return reservations.filter(r => r.date === todaysDate)
                break
            case 'upcoming':
                return reservations.filter(r => r.date > todaysDate)
                break
        }
    }

   let changeFilter = (value) =>{
       setFilter(value)
   }
    
    return(
        <div className="reservationContainer">
            <h1 className='header'>My Reservations</h1>
            <FilterReservations filter={changeFilter}/>
            {displayRes().map(r => 
                <ReservationCard key={r.id} reservation={r} baseUrl={props.baseUrl} delete={removeReservations}/>
                )}
        </div>
    )
}

export default Reservation
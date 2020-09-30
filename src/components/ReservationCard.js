import React, {useState, useEffect} from 'react'
import {Card} from 'semantic-ui-react'
import EditResForm from './EditResForm'

const ReservationCard = props => {
    const [restName, setRestName] = useState("Placeholder")

    const { id ,date, hour, table_id, party } = props.reservation

    useEffect(()=> {
        fetch(props.baseUrl+'tables/'+table_id)
        .then(res => res.json())
        .then(data => setRestName(data.name))
    }, [])

    const deleteReservation = () => {
       
        let config = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }
        fetch(props.baseUrl+`reservations/${id}`, config)
        .then(res => res.json())
        .then(res => {
            alert(res.message)
            props.delete(id)
        }) 
    }

    return(
        
        <Card centered>
            <Card.Content>
                <Card.Header>{restName}</Card.Header>
                
                <Card.Description>
                    <p>Date: {date}</p>
                    <p>Time: {`${hour}:00`}</p>
                    <p>Party Size: {party}</p>
                    <div>
                        <button onClick={deleteReservation}>Delete</button>
                    </div>
                </Card.Description>
            </Card.Content>
        </Card>  
    )
}

export default ReservationCard
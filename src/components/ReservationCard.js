import React, {useState, useEffect} from 'react'
import {Card} from 'semantic-ui-react'


const ReservationCard = props => {
    const [restName, setRestName] = useState("")

    const { date, hour, table_id, party } = props.reservation

    useEffect(()=> {
        fetch(props.baseUrl+'tables/'+table_id)
        .then(res => res.json())
        .then(data => setRestName(data.name))
    }, [])

    return(
        
        <Card centered>
            <Card.Content>
                <Card.Header>{restName}</Card.Header>
                <Card.Meta>Date: {date}</Card.Meta>
                <Card.Description>
                    <p>Time: {`${hour}:00`}</p>
                    <p>Party Size: {party}</p>
                </Card.Description>
            </Card.Content>
        </Card>  
    )
}

export default ReservationCard
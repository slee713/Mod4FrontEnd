import React from 'react'
import { Header, Image, Modal, ButtonOr } from 'semantic-ui-react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Login from './Login'
import SignUp from './SignUp'
import Signup from './SignUp'


let baseUrl= "http://localhost:3000/api/v1/"
let restUrl = baseUrl + "restaurants"
let loginUrl = baseUrl + 'login'

const ReservationForm = props => {
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const [date , setDate] = React.useState('')
    const [partySize, setPartySize] = React.useState(0)
    const [timeslots, setTimeSlots] = React.useState([])
    const [hour, setHour] = React.useState(0)
    let availableTimeSlots = (e) => {
        e.preventDefault()
        fetch(restUrl + `/${props.id}?date=${date}&party_size=${partySize}`)
        .then(res => res.json())
        .then(timeslots => {
            let options = timeslots.map(x => ({text:`${x}:00`, value: x}))
            setTimeSlots(options)
        })
    }

    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<p>Make Reservation</p>}
            >
            <Modal.Header>Make Reservation</Modal.Header>
            <Modal.Content>
                <Form onSubmit={null}>
                    <Form.Group unstackable widths={2}>
                        <Form.Input required type='date' label='Date' placeholder='Date' name="date" onChange={(e) => setDate(e.target.value)} />
                        <Form.Input required type='number' label='Party Size' placeholder='Party Size' name="party_size" onChange={(e) => setPartySize(e.target.value)}/>
                    </Form.Group>
                    <Button onClick={(e) => availableTimeSlots(e)}>Find Available TimeSlots</Button> 
                    <Form.Group widths={2}>
                        <Form.Select name="timeslot"
                        fluid
                        label='Time'
                        name='timeslot'
                        options={timeslots}
                        placeholder='Select Timeslot'
                        onChange={(e,{value}) => {
                            setHour(value)}}
                        />
                    </Form.Group>
                    {localStorage.token ? <Button type='submit'>Submit</Button> : <div><Login baseUrl={baseUrl} loginUrl={loginUrl}/> <SignUp baseUrl={baseUrl}/></div>}
                </Form>
                
            </Modal.Content>

            <Modal.Actions>
                <button color='green' onClick={() => setOpen(false)}>
                Back
                </button>
            </Modal.Actions>
    </Modal>
    )
    
}

export default ReservationForm
import React from 'react'
import { Header, Image, Modal, ButtonOr } from 'semantic-ui-react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import DatePicker from "react-datepicker";

let baseUrl= "http://localhost:3000/api/v1/"
let restUrl = baseUrl + "restaurants"

const ReservationForm = props => {
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])

    let availableTimeSlots = (date) => {
        console.log(date)
        // fetch(restUrl + `/${restaurantId}?date=${date}`)
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
                        <Form.Input required type='date' label='Date' placeholder='Date' name="date" onChange={(e)=> availableTimeSlots(e.target.value)} />
                        <Form.Input required label='Last name' placeholder='Last name' name="last_name"/>
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Select name="timeslot"
                        fluid
                        label='Time'
                        name='timeslot'
                        options={null}
                        placeholder='Select Timeslot'
                        />
                        <Form.Input required type='number' label='Party Size' placeholder='Party Size' name="party_size"/>
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
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
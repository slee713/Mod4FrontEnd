import React, { useState } from 'react' 
import { Modal} from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'


function EditResForm(props){
    // const [open, setOpen] = React.useState(false)
    // const [date , setDate] = React.useState('')
    // const [partySize, setPartySize] = React.useState(0)
    // const [timeslots, setTimeSlots] = React.useState([])
    // const [hour, setHour] = React.useState(0)
    // let availableTimeSlots = (e) => {
    //     e.preventDefault()
    //     fetch(restUrl + `/${props.id}?date=${date}&party_size=${partySize}`)
    //     .then(res => res.json())
    //     .then(timeslots => {
    //         let options = timeslots.map(x => ({text:`${x}:00`, value: x}))
    //         setTimeSlots(options)
    //     })
    // }

    // let makeReservation = (e) => {

    //     e.preventDefault()
    //     let configObj = {method: 'POST', 
    //                     headers: {'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${localStorage.token}`},
    //                     body: JSON.stringify({party: partySize, date: date, hour: hour})}
    //     fetch(reservationUrl + `?restId=${props.id}`, configObj)
    //     .then(res => res.json())
    //     .then(response => {
    //         alert(response.message)
    //         setOpen(false)
    //         props.closeDesc()
    //     })

    // }

    // return(
    //     <Modal
    //         onClose={() => setOpen(false)}
    //         onOpen={() => setOpen(true)}
    //         open={open}
    //         trigger={<button>Edit Reservation</button>}
    //         >
    //         <Modal.Header>Make Reservation</Modal.Header>
    //         <Modal.Content>
    //             <Form onSubmit={(e) => makeReservation(e)}>
    //                 <Form.Group unstackable widths={2}>
    //                     <Form.Input required type='date' label='Date' placeholder='Date' name="date" onChange={(e) => setDate(e.target.value)} />
    //                     <Form.Input required type='number' label='Party Size' placeholder='Party Size' name="party_size" onChange={(e) => setPartySize(e.target.value)}/>
    //                 </Form.Group>
    //                 <Button onClick={(e) => availableTimeSlots(e)}>Find Available TimeSlots</Button> 
    //                 <Form.Group widths={2}>
    //                     <Form.Select name="timeslot"
    //                     fluid
    //                     label='Time'
    //                     name='timeslot'
    //                     options={timeslots}
    //                     placeholder='Select Timeslot'
    //                     onChange={(e,{value}) => {
    //                         setHour(value)}}
    //                     />
    //                 </Form.Group>
    //                 {localStorage.token ? <Button type='submit'>Submit</Button> : <div><Login status={props.status} baseUrl={baseUrl} loginUrl={loginUrl}/> <SignUp status={props.status} baseUrl={baseUrl}/></div>}
    //             </Form>
                
    //         </Modal.Content>

    //         <Modal.Actions>
    //             <button color='green' onClick={() => setOpen(false)}>
    //             Back
    //             </button>
    //         </Modal.Actions>
    //     </Modal>
    // )
}

export default EditResForm
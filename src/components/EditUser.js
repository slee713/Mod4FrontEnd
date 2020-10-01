import React from 'react'
import './EditUser.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Header, Image, Modal, ButtonOr } from 'semantic-ui-react'

let baseUrl= "http://localhost:3000/api/v1/"

const EditUser = props => {
    const [open, setOpen] = React.useState(false)

    let updateUser = (e) => {
        e.preventDefault()
        let configObj = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.token}`},
            body: JSON.stringify({
                username: props.username,
                first_name: props.first_name,
                last_name: props.last_name,
                email: props.email,
                address: props.address
            })
        }
        fetch(baseUrl + 'users/user', configObj)
        .then(res => res.json())
        .then(user => {
                if (user.error)
                  alert(user.error)
                else{
                  setOpen(false)
                  alert(user.message)
                }
            })
    }

    return(
        <div className='form-div' >
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Update Information</Button>}
            >
                <Modal.Header>Update Information</Modal.Header>
                    <Modal.Content>
                        <Form >
                            <Form.Group >
                            <Form.Input label='Username' placeholder='Username' name="username" value={props.username} onChange={(e) => props.setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group >
                                    <Form.Input label='First Name' placeholder='First Name' name="first_name" value={props.first_name} onChange={(e) => props.setFirstName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group >
                                    <Form.Input label='Last Name' placeholder='Last Name' name="last_name" value={props.last_name} onChange={(e) => props.setLastName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group >
                                    <Form.Input label='Email' placeholder='Email' name="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group >
                                    <Form.TextArea label='Address' placeholder='Address' name="address" value={props.address} onChange={(e) => props.setAddress(e.target.value)}/>
                            </Form.Group>
                            <Form.Group >
                                <Button onClick={(e) => updateUser(e)}>Update Account</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Content>
                <Modal.Actions>
                    <button color='green' onClick={() => setOpen(false)}>
                    Back
                    </button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default EditUser

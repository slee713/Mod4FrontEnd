import React from 'react'
import { Header, Image, Modal, ButtonOr } from 'semantic-ui-react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
const SignUp = props => {

    const [open, setOpen] = React.useState(false)

    let signup = (e) => {
        e.preventDefault()
        let configObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                address: e.target.address.value
            })
        }
        fetch(props.baseUrl + 'users', configObj)
        .then(res => res.json())
        .then(user => {
                if (user.error)
                  alert(user.error)
                else{
                  localStorage.token = user.token
                  setOpen(false)
                  props.status()
                }
            })
    }

    return(
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<p>Signup</p>}
        >
        <Modal.Header>Signup</Modal.Header>
        <Modal.Content>
            <Form onSubmit={(e)=> signup(e)}>
                <Form.Group unstackable widths={2}>
                    <Form.Input required label='First name' placeholder='First name' name="first_name" />
                    <Form.Input required label='Last name' placeholder='Last name' name="last_name"/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input required label='Address' placeholder='Address' name="address"/>
                    <Form.Input required label='Email' placeholder='Email' name="email"/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input required label='Username' placeholder='Username' name="username"/>
                    <Form.Input required label='Password' type="password" placeholder='Password' name="password"/>
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

export default SignUp
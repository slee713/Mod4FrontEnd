import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

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
                  props.logged_in()
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
        
        <div>
            <form onSubmit = {(e) => signup(e)}>
                <label for="username">Username</label>
                <input id="username" type="text" name='username'/>
                <label for="firstname">First Name</label>
                <input id="firstname" type="text" name='first_name'/>
                <label for="lastname">Last Name</label>
                <input id="lastname" type="text" name='last_name'/>
                <label for="email">Email</label>
                <input id="email" type="text" name='email'/>
                <label for="address">Address</label>
                <input id="address" type="text" name='address'/>
                <label for="password">Password</label>
                <input id="password" type="password" name='password'/>
                <button type="submit">Create Account</button>
            </form>
        </div>
        
        </Modal.Content>

        <Modal.Actions>
            <Button color='green' onClick={() => setOpen(false)}>
            Back
            </Button>
        </Modal.Actions>
    </Modal>
    )
}

export default SignUp
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SignUp = props => {

    const [open, setOpen] = React.useState(false)

    return(
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<p>Login</p>}
        >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
        
        <div>
            <form onSubmit = {(e) => login(e)}>
                <label for="username">Username</label>
                <input id="username" type="text" name='username'/>
                <label for="password">Password</label>
                <input id="password" type="password" name='password'/>
                <button type="submit">Login</button>
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
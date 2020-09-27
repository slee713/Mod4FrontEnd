import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
const Login = props => {
    const [open, setOpen] = React.useState(false)
    
    const login = (e) => {
        e.preventDefault()
        let configObj = {method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                          username: e.target.username.value,
                          password: e.target.password.value
                        })}
        fetch(props.loginUrl, configObj)
        .then(res => res.json())
        .then(user => {
          // console.log(user)
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
      trigger={<p>Login</p>}
    >
      <Modal.Header>Login</Modal.Header>
      <Modal.Content>
        
        {/* <div>
            <form onSubmit = {(e) => login(e)}>
                <label for="username">Username</label>
                <input id="username" type="text" name='username'/>
                <label for="password">Password</label>
                <input id="password" type="password" name='password'/>
                <button type="submit">Login</button>
            </form>
        </div> */}
        <Form onSubmit={(e) => login(e)}>
          <Form.Field required>
            <label for="username">Username</label>
            <input id="username" placeholder='Username' name="username"/>
          </Form.Field>
          <Form.Field required>
            <label for="password">Password</label>
            <input id="password" type="password" name='password'/>
          </Form.Field>
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

export default Login
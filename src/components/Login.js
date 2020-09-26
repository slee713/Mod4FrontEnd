import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

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

        {/* <Button color='green' onClick={() => setOpen(false)}>
          Close
        </Button> */}
        
      </Modal.Actions>
    </Modal>
    )
    
}

export default Login
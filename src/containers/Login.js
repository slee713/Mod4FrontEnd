import React from 'react'

const Login = props => {
    
    return(
        <div>
            <form>
                <label for="username">Username</label>
                <input id="username" type="text" />
                <label for="password">Password</label>
                <input id="password" type="password" />
                <button type="submit">Login</button>
            </form>

        </div>
    )
    
}

export default Login
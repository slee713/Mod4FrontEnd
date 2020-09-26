import React from 'react'
import Login from './Login'
 
const Navbar = props => {
    return(
        <div>
            <p>Home

            <span><p>My Account</p></span>
            <span><p>Reservations</p></span>
            <span><Login loginUrl={props.loginUrl}/></span>
            <span><p>Logout</p></span>
           </p> 
        </div>
    )
}

export default Navbar
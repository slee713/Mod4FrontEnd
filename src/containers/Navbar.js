import React from 'react'
import { render } from 'react-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import './Navbar.css'
import '../yummy.png'
import { Link, withRouter } from 'react-router-dom'


const Navbar = props => {
    
    
    
    const logout = () => {
        console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
        localStorage.clear() 
        props.status()
        props.history.push('/')
    }


        return(
            <div className="navbar">
                <Link to="/" className="link">MyApp</Link>
                {props.logged_in ?
                <div className="loggedIn">
                    <Link to="/account" >My Account</Link>
                    <Link to="/reservations" >Reservations</Link>
                    <p onClick={logout} >Logout</p>
                </div>
                :
                <div className="loggedOut">
                    
                    <Signup status={props.status} logged_in={props.logged_in} baseUrl={props.baseUrl}/>
                    
                    <Login status={props.status} logged_in={props.logged_in} loginUrl={props.loginUrl}/>
                
                </div>
                }
            </div>
        )
    
}

export default withRouter(Navbar)
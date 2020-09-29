import React from 'react'
import { render } from 'react-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import './Navbar.css'
import '../yummy.png'
import { Link } from 'react-router-dom';


const Navbar = props => {
    
    
    const logout = () => {
        localStorage.clear() 
        props.status()
    }


        return(
            <div className="navbar">
                <Link to="/" className="link"><img className='logo' src={require('../yummy.png')}/></Link>
                {props.logged_in ?
                <div className="loggedIn">
                    <Link to="/account" >My Account</Link>
                    <Link to="/reservations" >Reservations</Link>
                    <p onClick={logout} >Logout</p>
                </div>
                :
                <div className="loggedOut">
                    <div>
                        <Signup status={props.status} logged_in={props.logged_in} baseUrl={props.baseUrl}/>
                    </div>
                    <div>
                        <Login status={props.status} logged_in={props.logged_in} loginUrl={props.loginUrl}/>
                    </div>
                </div>
                }
            </div>
        )
    
}

export default Navbar
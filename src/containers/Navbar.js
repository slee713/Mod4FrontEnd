import React from 'react'
import { render } from 'react-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import './Navbar.css'

class Navbar extends React.Component {
    state={
        logged_in: localStorage.token ? true : false
    }

    logged_in = () => {
        this.setState({
            logged_in: true
        })
    }
    
    logout = () => {
        localStorage.clear() 
        this.setState({
            logged_in: false
        })
    }

    render(){
        return(
            <div className="navbar">
                <p>AppName</p>
                {this.state.logged_in ?
                <div className="loggedIn">
                    <p>My Account</p>
                    <p>Reservations</p>
                    <p onClick={() => this.logout()}>Logout</p>
                </div>
                :
                <div className="loggedOut">
                    <div>
                        <Signup logged_in={this.logged_in} baseUrl={this.props.baseUrl}/>
                    </div>
                    <div>
                        <Login logged_in={this.logged_in} loginUrl={this.props.loginUrl}/>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Navbar
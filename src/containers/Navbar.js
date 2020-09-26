import React from 'react'
import { render } from 'react-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
 
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
            <div>
                <span>Home</span>
                {this.state.logged_in ?
                <div>
                <span>My Account</span>
                <span>Reservations</span>
                <span onClick={() => this.logout()}>Logout</span>
                </div>
                :
                <div>
                <span><Signup logged_in={this.logged_in} baseUrl={this.props.baseUrl}/></span>
                <span><Login logged_in={this.logged_in} loginUrl={this.props.loginUrl}/></span>
                </div>
                }
            </div>
        )
    }
}

export default Navbar
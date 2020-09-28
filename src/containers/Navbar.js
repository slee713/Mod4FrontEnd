import React from 'react'
import { render } from 'react-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import './Navbar.css'
import '../yummy.png'
import { Link } from 'react-router-dom';
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
                <Link to="/"><img className='logo' src={require('../yummy.png')}/></Link>
                {this.state.logged_in ?
                <div className="loggedIn">
                    <Link to="/account" >My Account</Link>
                    <Link to="/reservations" >Reservations</Link>
                    <p onClick={this.logout} >Logout</p>
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
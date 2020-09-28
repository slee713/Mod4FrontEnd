import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestContainer from './containers/RestContainer'
import Navbar from './containers/Navbar'
import Account from './components/Account'
import Reservation from './components/Reservation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {useState} from 'react'

let baseUrl= "http://localhost:3000/api/v1/"
let restUrl = baseUrl + "restaurants"
let loginUrl = baseUrl + 'login'

const App = () => {

const [logged_in, setLogged_in] = useState(localStorage.token ? true : false)
  
const status = () => {
    setLogged_in(
        localStorage.token ? true : false
    )
}
 
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar 
            logged_in={logged_in}
            status={status}
            baseUrl={baseUrl} 
            restUrl={restUrl} 
            loginUrl={loginUrl} 
          />
          
          <Switch>
            <Route exact path="/" render={(routerProps) =>  <RestContainer {...routerProps} status={status} baseUrl={baseUrl} restUrl={restUrl} loginUrl={loginUrl}/>}/>
            <Route exact path="/account" render={(routerProps) =>  <Account {...routerProps} baseUrl={baseUrl} restUrl={restUrl} loginUrl={loginUrl}/>}/>
            <Route exact path="/reservations" render={(routerProps) =>  <Reservation {...routerProps} baseUrl={baseUrl} restUrl={restUrl} loginUrl={loginUrl}/>}/>
          </Switch>


        </div>
        </BrowserRouter>
    );
  
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestContainer from './containers/RestContainer'
import Navbar from './containers/Navbar'
import Account from './components/Account'
import Reservation from './components/Reservation'

let baseUrl= "http://localhost:3000/api/v1/"
let restUrl = baseUrl + "restaurants"
let loginUrl = baseUrl + 'login'

class App extends React.Component{
  state = {
    page: "restaurants"
  }

  changePage = page => {
    this.setState({page})
  }


  render(){
    return (
      <div className="App">
        <Navbar baseUrl={baseUrl} restUrl={restUrl} loginUrl={loginUrl} changePage={this.changePage}/>
        {this.state.page === "restaurants" 
        ? 
        <RestContainer baseUrl={baseUrl} restUrl={restUrl} loginUrl={loginUrl}/>
        :
        this.state.page === "account" 
        ?
        <Account />:
        <Reservation />}
        
      </div>
    );
  }
}

export default App;

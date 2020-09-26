import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestContainer from './containers/RestContainer'
import Navbar from './containers/Navbar'


function App() {
  let baseUrl= "http://localhost:3000/api/v1/"
  let restUrl = baseUrl + "restaurants"
  let loginUrl = baseUrl + 'login'
  return (
    <div className="App">
      <Navbar baseUrl={baseUrl} restUrl={restUrl} loginUrl={loginUrl}/>
      <RestContainer baseUrl={baseUrl} restUrl={restUrl} loginUrl={loginUrl}/>
    </div>
  );
}

export default App;

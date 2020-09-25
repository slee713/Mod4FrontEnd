import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestContainer from './containers/RestContainer'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <RestContainer />
    </div>
  );
}

export default App;

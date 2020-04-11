import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Institutions from './Routes/institutions'
import Persons from './Routes/persons'
import Locations from './Routes/locations'
import Dashboard from './Routes/dashboard'
import Nav from './Routes/nav'

function App() {
  return (
    <Router>
      <Nav />
      <br />
    
      <Route exact path="/" component={Dashboard} />
      <Route path="/institutions" component={Institutions} />
      <Route path="/persons" component={Persons} />
      <Route path="/locations" component={Locations} />

    </Router>
  );
}

export default App;
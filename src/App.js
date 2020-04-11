import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Institutions from './component/institutions'
import Persons from './component/persons'
import Locations from './component/locations'
import Home from './component/dashboard'
import Nav from './component/nav'

function App() {
  return (
    <Router>
      <Nav />
      <br />
    
      <Route exact path="/" component={Home} />
      <Route path="/institutions" component={Institutions} />
      <Route path="/persons" component={Persons} />
      <Route path="/locations" component={Locations} />
</Router>
  );
}

export default App;
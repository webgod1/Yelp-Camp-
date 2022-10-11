import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
      {/* Home Page */}
      <Route  exact path='/'>
        <Home/>
      </Route>
      <Route  exact path='/about'>
        <About/>
      </Route>
      {/* Error Page */}
      <Route exact path="*">
        <Error/>
      </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;

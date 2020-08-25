import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../auth/login';
import Signup from '../../auth/signup';
// import PrivateRoute from '../../auth/PrivateRoute';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path = '/login' component = {Login}></Route>
        <Route exact path = '/signup' component = {Signup}></Route>
      </Switch>
    </Router>
  );
}
  

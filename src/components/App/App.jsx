import React from 'react';
import Login from '../../auth/login';
import Signup from '../../auth/signup';
// import PrivateRoute from '../../auth/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import GamesContainer from '../../containers/GamesContainer';

import Header from '../Header/Header';
import Divider from '@material-ui/core/Divider';
import StreamerList from '../StreamList/StreamList';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Divider variant="middle" />
        <Switch>
          <Route exact path = '/login' component = {Login}></Route>
          <Route exact path = '/signup' component = {Signup}></Route>
          <Route exact path='/' component={GamesContainer} />
          <Route exact path='/:title' component={StreamerList} />
        </Switch>
      </Router>
    </>);
}

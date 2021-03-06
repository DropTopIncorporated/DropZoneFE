import React from 'react';
import Login from '../Users/Login';
import Signup from '../Users/Signup';
import Header from '../Header/Header';
import StreamerList from '../StreamList/StreamList';
import GamesContainer from '../../containers/GamesContainer';
import AboutUs from '../AboutUs/AboutUs';
import Divider from '@material-ui/core/Divider';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import FavoritesContainer from '../../containers/FavoritesContainer';
import PrivateRoute from '../../auth/PrivateRoute';
import Footer from '../Footer/Footer';

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
          <PrivateRoute exact path='/favorites' component={FavoritesContainer} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/:title' component={StreamerList} />
        </Switch>
        <Footer />
      </Router>
    </>);
}

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import GamesContainer from '../../containers/GamesContainer';
import Header from '../Header/Header';


export default function App() {
  return (

    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={GamesContainer} />
          {/* <Route exact path='/:name' component={streamerList} /> */}
        </Switch>
      </Router>
    </>);
}
  

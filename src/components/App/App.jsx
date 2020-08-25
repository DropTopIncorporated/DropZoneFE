import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import GamesContainer from '../../containers/GamesContainer';
import Header from '../Header/Header';
import Divider from '@material-ui/core/Divider';
import styles from './App.css'


export default function App() {
  return (
<<<<<<< HEAD
    <div className={styles.background}>
      <Header />
      <Divider variant='middle'/>
      <GamesContainer />
    </div>);
=======

    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={GamesContainer} />
          {/* <Route exact path='/:name' component={streamerList} /> */}
        </Switch>
      </Router>
    </>);
>>>>>>> cbda20eb65025850f920f3b3a7e34604ce98a0c8
}
  

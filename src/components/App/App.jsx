import React from 'react';
import GamesContainer from '../../containers/GamesContainer';
import Header from '../Header/Header';
import Divider from '@material-ui/core/Divider';
import styles from './App.css'

export default function App() {
  return (
    <div className={styles.background}>
      <Header />
      <Divider variant='middle'/>
      <GamesContainer />
    </div>);
}
  
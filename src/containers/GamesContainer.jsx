import React from 'react'
import { useGames } from '../hooks/AppContext'
const games = require('../data.json')
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styles from './GamesContainer.css'

const GamesContainer = () => {
  const gameElements = games.map(game => (
    <>
      <li key={game.gameId} className={styles.card}>
        <img src={'https://placekitten.com/200/300'} alt={game.name} className={styles.gameImage}/>
        <div className={styles.caption}>
        <p>{game.title}</p>  
        </div>
        <FavoriteBorderOutlinedIcon />
      </li>
    </>
  ));
  
  return (
    <div className={styles.background}>
      <ul className={styles.games}>
        {gameElements}
      </ul>
    </div>
  )
}

export default GamesContainer;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styles from './GamesContainer.css';
import { useSelector } from '../hooks/AppContext';
import { getGames } from '../selectors/selectors';
import { fetchAllStreamers } from '../services/apiFetches';

const GamesContainer = () => {
  const [streamers, setStreamers] = useState([]);
  let data = useSelector(getGames);

  useEffect(() => {
    fetchAllStreamers()
      .then(streamers => streamers.map(item => item.gameTitle))
      .then(res => [...new Set(res)])
      .then(setStreamers);
  }, []);

  const games = data.filter(({ title }) => streamers.includes(title));

  const gameElements = games.map(({ gameId, name, title, imageUrl }) => (
    <>
      <li key={gameId} className={styles.card}>
        <Link to={`/${title}`} >
          <img src={imageUrl} alt={name} className={styles.gameImage}/>
        </Link>
        <div className={styles.captionContainer}>
          <p className={styles.caption}>{title} 

            <label>
              <input type='checkbox' hidden={true} />
              <FavoriteBorderOutlinedIcon className={styles.favorite}/>
            </label></p>  
        </div> 
      </li>
    </>
  ));
  
  return (
    <div className={styles.background}>
      <ul className={styles.games}>
        {gameElements}
      </ul>
    </div>
  );
};

export default GamesContainer;

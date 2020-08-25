import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styles from './GamesContainer.css';
import { useSelector } from '../hooks/AppContext';
import { getGames } from '../selectors/selectors';

const GamesContainer = () => {
  const games = useSelector(getGames);

  const gameElements = games.map(({ gameId, name, title, imageUrl },) => (
    <>
      <li key={gameId} className={styles.card}>
        <Link to={`/${title}`} >
          <img src={imageUrl} alt={name} className={styles.gameImage}/>
        </Link>
        <div className={styles.captionContainer}>
<<<<<<< HEAD
            <p className={styles.caption}>{game.title} <label>
              <input type='checkbox' hidden={true}>
              </input >
=======
          <p className={styles.caption}>{title} 
                  
            <label>
              <input type='checkbox' hidden={true} />
>>>>>>> cbda20eb65025850f920f3b3a7e34604ce98a0c8
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

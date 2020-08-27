import React, { useEffect, useState } from 'react';
import styles from './GamesContainer.css';
import { getAllFavorites } from '../services/apiFetches';
import { useSelector } from '../hooks/AppContext';
import { getGames } from '../selectors/selectors';

export default function FavoritesContainer() {
  const [favoritesList, setFavoritesList] = useState([]);
  const games = useSelector(getGames);

  useEffect(() => {
    getAllFavorites()
      .then(favorites => favorites.map(item => item.gameTitle))
    //   .then(res => [...new Set(res)])
      .then(setFavoritesList);
  }, []);

  const gamesList = games.filter(({ title }) => favoritesList.includes(title));

  const listElements = gamesList.map(({ title, name, imageUrl }, i) => {
    return (
      <li key={i} >
        <img src={imageUrl} alt={name} className={styles.gameImage}/>
        <div className={styles.captionContainer}>
          <p className={styles.caption}>
            {title}
          </p>
        </div>
      </li>
    );
  });
  return (
    <div className={styles.background}>
      <ul className={styles.games}>
        {listElements}       
      </ul>
    </div>
  );
}

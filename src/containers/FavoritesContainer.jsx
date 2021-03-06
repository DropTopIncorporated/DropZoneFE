import React, { useEffect, useState } from 'react';
import styles from './GamesContainer.css';
import { Link } from 'react-router-dom';
import { getAllFavorites, deleteFavorite } from '../services/apiFetches';
import { useSelector } from '../hooks/AppContext';
import { getGames } from '../selectors/selectors';

export default function FavoritesContainer() {
  const [favoritesList, setFavoritesList] = useState([]);
  const [changeFavorites, setChangeFavorites] = useState(false);

  const games = useSelector(getGames);

  useEffect(() => {
    getAllFavorites()
      .then(favorites => favorites.map(item => item.gameTitle))
      .then(setFavoritesList);
  }, [changeFavorites]);

  const handleClick = (title) => {

    deleteFavorite(title)
      .then(res => {
        setFavoritesList(favoritesList.filter(item => item.gameTitle !== res.gameTitle));
        changeFavorites ? setChangeFavorites(false) : setChangeFavorites(true);
      });

  };

  const gamesList = games.filter(({ title }) => favoritesList.includes(title));

  const listElements = gamesList.map(({ title, name, imageUrl }, i) => {
    return (
      <li key={i} >
        <Link to={`/${title}`} >
          <img src={imageUrl} alt={name} className={styles.gameImage}/>
        </Link>
        <div className={styles.captionContainer}>
          <p className={styles.caption}>
            {title}
          </p>
        </div>
        <button className={styles.deleteButton}onClick={() => handleClick(title)} >Delete</button>       
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

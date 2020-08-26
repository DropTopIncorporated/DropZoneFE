import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styles from './GamesContainer.css';
import { useSelector, useDispatch } from '../hooks/AppContext';
import { getGames } from '../selectors/selectors';
import { fetchAllStreamers, fetchSearch, fetchGamesWithDrops } from '../services/apiFetches';
import SearchBar from '../components/Search/SearchBar';
import { setGames } from '../actions/reducerActions';


const GamesContainer = () => {
  const [streamers, setStreamers] = useState([]);
  let data = useSelector(getGames);
  const dispatch = useDispatch();


  const [searchedGame, setSearchGames] = useState('');

  useEffect(() => {
    fetchAllStreamers()
      .then(streamers => streamers.map(item => item.gameTitle))
      .then(res => [...new Set(res)])
      .then(setStreamers);
  }, []);

  const handleChange = ({ target }) => setSearchGames(target.value);

  useEffect(() => {
    fetchGamesWithDrops(searchedGame)
      .then(searchedGame => {
        dispatch(setGames(searchedGame));
      });
  }, [searchedGame]);


  const games = data.filter(({ title }) => streamers.includes(title));

  const gameElements = games.map(({ gameId, name, title, imageUrl }) => (
    <>
      <li key={gameId} className={styles.card}>
        <Link to={`/${title}`} >
          <img src={imageUrl} alt={name} className={styles.gameImage}/>
        </Link>
        <div className={styles.captionContainer}>
          <p className={styles.caption}>
            {title} 
          </p>  
          <label>
            <input type='checkbox' hidden={true} />
            <FavoriteBorderOutlinedIcon className={styles.favorite}/>
          </label>
        </div> 
      </li>
    </>
  ));
  
  return (
    <div className={styles.background}>
      <SearchBar
        search={searchedGame}
        result={games}
        onChange={handleChange}
      />
      <ul className={styles.games}>
        {gameElements}
      </ul>
    </div>
  );
};

export default GamesContainer;

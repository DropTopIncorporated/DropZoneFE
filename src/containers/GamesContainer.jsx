import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styles from './GamesContainer.css';
import { useSelector, useDispatch } from '../hooks/AppContext';
import { getGames } from '../selectors/selectors';
import { fetchAllStreamers, fetchGamesWithDrops, postFavorite, deleteFavorite, getAllFavorites } from '../services/apiFetches';
import SearchBar from '../components/Search/SearchBar';
import { setGames } from '../actions/reducerActions';
import { useActiveUser } from '../hooks/AuthContext';


const GamesContainer = () => {
  const [allFavorites, setAllFavorites] = useState([]);
  const [changeFavorites, setChangeFavorites] = useState(false);
  const [streamers, setStreamers] = useState([]);
  // const [favorite, setFavorite] = useState(false);
  // const [favoriteTitle, setFavoriteTitle] = useState('');
  const [searchedGame, setSearchGames] = useState('');

  const activeUser = useActiveUser();

  let data = useSelector(getGames);
  const dispatch = useDispatch();

  useEffect(() => {
   
    getAllFavorites()
      .then(res => res.map(item => item.gameTitle))
      .then(setAllFavorites);

  }, [changeFavorites]);

  useEffect(() => {
    fetchAllStreamers()
      .then(streamers => streamers.map(item => item.gameTitle))
      .then(res => [...new Set(res)])
      .then(setStreamers);
  }, []);

  useEffect(() => {
    fetchGamesWithDrops(searchedGame)
      .then(searchedGame => {
        dispatch(setGames(searchedGame));
      });
  }, [searchedGame]);




  // useEffect(() => {
  //   favorite 
  //     ? postFavorite({ 
  //       gameId: data.filter(item => item.title === favoriteTitle).gameId,
  //       gameTitle: favoriteTitle
  //     })
  //     : deleteFavorite(favoriteTitle);
  // }, [favorite]);

  // const handleClick = (title) => {
  //   favorite ? setFavorite(false) : setFavorite(true);
  //   setFavoriteTitle(title);
  // };

  const handleClick = (title) => {
    if(!allFavorites.includes(title)) {
      postFavorite({ 
        gameId: data.filter(item => item.title === title).gameId,
        gameTitle: title
      })
        .then(res => {
          setAllFavorites([...allFavorites, res.gameTitle]); 
          changeFavorites ? setChangeFavorites(false) : setChangeFavorites(true);
        });        
    }
    else {
      deleteFavorite(title)
        .then(res => {
          setAllFavorites(allFavorites.filter(item => item.gameTitle !== res.gameTitle));
          changeFavorites ? setChangeFavorites(false) : setChangeFavorites(true);
        });       
    }
  };

  const handleChange = ({ target }) => setSearchGames(target.value);

  const games = data.filter(({ title }) => streamers.includes(title));

  const gameElements = games.map(({ name, title, imageUrl }, i) => (
    <>
      <li key={imageUrl} className={styles.card}>
        <Link key={title} to={`/${title}`} >
          <img src={imageUrl} alt={name} className={styles.gameImage}/>
        </Link>
        <div className={styles.captionContainer}>
          <p className={styles.caption}>
            {title} 
          </p>  
          { activeUser && <label>
            <input onChange={() => handleClick(title)} checked={allFavorites.includes(title)} type='checkbox' hidden={true} />
            <FavoriteBorderOutlinedIcon className={styles.favorite}/>
          </label>}
        </div> 
      </li>
    </>
  ));
  
  return (
    <div className={styles.background}>
      <SearchBar
        onChange={handleChange}
      />
      <ul className={styles.games}>
        {gameElements}
      </ul>
    </div>
  );
};

export default GamesContainer;

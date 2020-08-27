import React, { useState, useEffect } from 'react';
import { fetchAllGames } from '../../services/apiFetches';

const AllGames = () => {
  const [allGames, setAllGames] = useState([]);
  // const [favorite, setFavorite] = useState(false);
  // const [favoriteTitle, setFavoriteTitle] = useState('');

  useEffect(() => {
    fetchAllGames()
      .then(setAllGames);
  }, []);

  // const handleClick = (title) => {
  //   favorite ? setFavorite(false) : setFavorite(true);
  //   setFavoriteTitle(title);
  // };

  const gameDetails = allGames.map(game => (
    <>
      <li>
        <img src={game.imageUrl} />
        <p>
          {game.title}
        </p>
      </li>
    </>
  ));

  return (
    <div>
      <ul>
        {gameDetails}
      </ul>
    </div>
  );
};

export default AllGames;

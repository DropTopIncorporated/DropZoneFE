import React from 'react'
import { useGames } from '../hooks/AppContext'


const GamesContainer = () => {
  const games = useGames();

  const gameElements = games.map(game => (
    <>
    <li key={game.id}>
      <p>{game.name}</p>
      <img src={game.image} alt={game.name}/>
    </li>
    </>
  ));
  
  return (
    <ul>
      {gameElements}
    </ul>
  )
}

export default GamesContainer;
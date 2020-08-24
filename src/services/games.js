export const fetchGamesWithDrops = () => {
  //api call to get games with drops from database
  return fetch(process.env.DATABASE_URL/'games', {Method: 'GET'})
    .then(games => games);

  //returning the response to be used in the provider
}

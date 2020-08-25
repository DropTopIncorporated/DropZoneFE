
const localUrl = 'http://localhost:7890/api/v1';
const url = 'https://dropzown-staging.herokuapp.com/api/v1';

export const fetchGamesWithDrops = () => {
  
  return fetch(`${localUrl}/games`)
    .then(res => res.json());
};


export const fetchStreamers = () => {
  
  return fetch(`${url}/streams`)
    .then(res => res.json());
};

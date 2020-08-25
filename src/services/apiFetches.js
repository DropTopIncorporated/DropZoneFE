const localUrl = 'http://localhost:7890/api/v1';
const url = 'https://dropzown-staging.herokuapp.com/api/v1';

export const fetchGamesWithDrops = () => {
  return fetch(`${url}/games`)
    .then(res => res.json());
};

export const fetchStreamers = (title) => {
  return fetch(`${url}/streams/${title}`)
    .then(res => res.json());
};

export const fetchAllStreamers = () => {
  return fetch(`${url}/streams`)
    .then(res => res.json());
};

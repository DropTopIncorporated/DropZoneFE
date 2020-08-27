const localUrl = 'http://localhost:7890/api/v1';
const url = 'https://dropzown-staging.herokuapp.com/api/v1';

export const fetchGamesWithDrops = (search = '') => {
  return fetch(`${localUrl}/games?search=${search}`)
    .then(res => res.json());
};

export const fetchStreamers = (title, search = '') => {
  return fetch(`${localUrl}/streams/${title}?search=${search}`)
    .then(res => res.json());
};

export const fetchAllStreamers = () => {
  return fetch(`${localUrl}/streams`)
    .then(res => res.json());
};

export const postFavorite = body => {
  return fetch(`${localUrl}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body)
  })
    .then(res => res.json());
};

export const getAllFavorites = () => {
  return fetch(`${localUrl}/favorites`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(res => res.json());
};

export const deleteFavorite = title => {
  return fetch(`${localUrl}/favorites/${title}`, {
    method: 'DELETE',
    credentials: 'include'
  })
    .then(res => res.json());
};

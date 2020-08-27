import { post, get, del } from './request';

export const fetchGamesWithDrops = (search = '') => {
  return get(`/api/v1/games?search=${search}`);
};

export const fetchStreamers = (title, search = '') => {
  return get(`/api/v1/streams/${title}?search=${search}`);
};

export const fetchAllStreamers = () => {
  return get('/api/v1/streams');
};

export const postFavorite = favoriteObject => {
  return post('/api/v1/favorites', favoriteObject);

};

export const getAllFavorites = () => {
  return get('/api/v1/favorites');
};

export const deleteFavorite = (title) => {
  return del(`/api/v1/favorites/${title}`);
};

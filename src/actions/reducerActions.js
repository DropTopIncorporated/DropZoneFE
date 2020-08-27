export const SET_GAMES = 'SET_GAMES';
export const setGames = (games) => ({
  type: SET_GAMES,
  payload: games
});

export const SET_STREAMERS = 'SET_STREAMERS';
export const setStreamers = (streamers) => ({
  type: SET_STREAMERS,
  payload: streamers
});

export const SET_FAVORITES = 'SET_FAVORITES';
export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites
});

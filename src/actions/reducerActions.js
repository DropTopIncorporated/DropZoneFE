export const SET_GAMES = 'SET_GAMES';
export const setGames = (games) => ({
  type: SET_GAMES,
  payload: games
})

export const SET_CHANNELS = 'SET_CHANNELS';
export const setChannels = (channels) => ({
  type: SET_CHANNELS,
  payload: channels
})

export const SET_FAVORITES = 'SET_FAVORITES';
export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites
})
export const getGames = (state) => {
  return state.games;
};

export const getFavorites = (state) => {
  return state.user.favorites; 
};

export const getUser = (state) => {
  return state.user;
};

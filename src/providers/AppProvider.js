import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/AppContext';
import reducer, { initialState } from '../reducers/reducer';
import { fetchGamesWithDrops } from '../services/apiFetches';
import { setGames } from '../actions/reducerActions';


// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchGamesWithDrops()
      .then(games => dispatch(setGames(games)));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

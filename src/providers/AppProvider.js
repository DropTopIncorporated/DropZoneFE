import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/AppContext';
import reducer, { initialState } from '../reducers/reducer';
import { fetchGames } from '../services/games.js'
import setGames from '../actions/reducerActions';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchGames()
      .then(games => dispatch(setGames(games)));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
import { SET_GAMES, SET_CHANNELS, SET_FAVORITES } from "../actions/reducerActions"

export const initialState = {
  games: [],
  streams:[],
  channels: [],
  favorites: []
}

export default function reducer(state, action) {
  switch(action.type) {
    case SET_GAMES: {
      return { ...state, games: action.payload}
    };
    case SET_CHANNELS: {
      return { ...state, channels: action.payload}
    };
    case SET_FAVORITES: {
      return { ...state, favorites: action.payload 
      }
    }
  }
};

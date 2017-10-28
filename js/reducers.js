// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const shows = (state = [], action: Action) => {
  if (action.type === ADD_API_DATA) {
    return [...state, action.payload.shows]
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, shows });

export default rootReducer;

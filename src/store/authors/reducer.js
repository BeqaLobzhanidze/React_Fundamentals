import { ADD_AUTHOR, INITIAL_VALUE_AUTHORS } from './types';

const initialState = [];

export const AuthorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_VALUE_AUTHORS:
      return action.payload;
    case ADD_AUTHOR:
      return [...state, action.payload];
    default:
      return state;
  }
};

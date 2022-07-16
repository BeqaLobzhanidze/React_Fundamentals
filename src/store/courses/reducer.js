import { ADD_COURSES, DELETE_COURSES, INITIAL_VALUE } from './types';

const initialState = [];
export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_VALUE: {
      return action.payload;
    }
    case ADD_COURSES:
      return [...state, action.payload];
    case DELETE_COURSES:
      return state.filter((courses) => courses.id !== action.payload);
    default:
      return state;
  }
};

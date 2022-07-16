import { ADD_AUTHOR, DELETE_AUTHOR, INITIAL_VALUE_AUTHORS } from './types';

// const initialState = [
//   {
//     id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
//     name: 'Vasiliy Dobkin',
//   },
//   {
//     id: 'f762978b-61eb-4096-812b-ebde22838167',
//     name: 'Nicolas Kim',
//   },
//   {
//     id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
//     name: 'Anna Sidorenko',
//   },
//   {
//     id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
//     name: 'Valentina Larina',
//   },
// ];

const initialState = [];

export const AuthorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_VALUE_AUTHORS:
      return action.payload;
    case ADD_AUTHOR:
      return [...state, action.payload];
    case DELETE_AUTHOR:
      return state.filter((authors) => authors.id !== action.payload);
    default:
      return state;
  }
};

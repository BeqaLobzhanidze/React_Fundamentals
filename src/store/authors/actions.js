import { ADD_AUTHOR, DELETE_AUTHOR, INITIAL_VALUE_AUTHORS } from './types';

export const AddAuthors = (author) => {
  return { type: ADD_AUTHOR, payload: author };
};

export const DeleteAuthors = (id) => {
  return { type: DELETE_AUTHOR, payload: id };
};

export const GetInitialAuthors = (payload) => {
  return { type: INITIAL_VALUE_AUTHORS, payload };
};

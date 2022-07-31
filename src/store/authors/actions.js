import { ADD_AUTHOR, INITIAL_VALUE_AUTHORS } from './types';

export const AddAuthors = (author) => {
  return { type: ADD_AUTHOR, payload: author };
};

export const GetInitialAuthors = (payload) => {
  return { type: INITIAL_VALUE_AUTHORS, payload };
};

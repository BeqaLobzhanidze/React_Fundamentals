import { ADD_AUTHOR, DELETE_AUTHOR } from './types';

export const AddAuthors = (author) => {
  return { type: ADD_AUTHOR, payload: author };
};

export const DeleteAuthors = (id) => {
  return { type: DELETE_AUTHOR, payload: id };
};

import { LOGIN, LOGOUT, REGISTRATION } from './types';

const inisitalState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
};

export const UserReducer = (state = inisitalState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        name: action.payload.name,
      };
    case LOGOUT:
      return inisitalState;
    default:
      return state;
  }
};

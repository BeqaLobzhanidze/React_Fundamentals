import { LOGIN, LOGOUT } from './types';

const inisitalState = {
  isAuth: !!localStorage.getItem('TOKEN'),
  name: localStorage.getItem('NAME'),
  email: '',
  token: '',
};

export const UserReducer = (state = inisitalState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        name: action.payload.name,
      };
    case LOGOUT:
      return {
        isAuth: false,
        token: '',
        name: '',
        email: '',
      };
    default:
      return state;
  }
};

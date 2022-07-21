import { GET_ROLE, LOGIN, LOGOUT } from './types';

const inisitalState = {
  isAuth: !!localStorage.getItem('TOKEN'),
  name: localStorage.getItem('NAME'),
  email: '',
  token: localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : '',
  role: localStorage.getItem('NAME') === 'null' ? 'admin' : 'guest',
};

export const UserReducer = (state = inisitalState, action) => {
  switch (action.type) {
    case GET_ROLE:
      return {
        ...state,
        role: action.payload.role,
        name: action.payload.name,
        token: action.payload.token,
      };
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        name: action.payload.name,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: '',
        name: '',
        email: '',
      };
    default:
      return state;
  }
};

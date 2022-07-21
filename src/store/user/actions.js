import { GET_ROLE, LOGIN, LOGOUT } from './types';

export const Login = (payload) => {
  return { type: LOGIN, payload };
};

export const Logout = () => {
  return { type: LOGOUT };
};

export const GetRole = (role, name, token) => {
  return { type: GET_ROLE, payload: { role, name, token } };
};

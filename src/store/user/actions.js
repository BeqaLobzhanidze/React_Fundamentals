import { LOGIN, LOGOUT, REGISTRATION } from './types';

export const Login = (payload) => {
  return { type: LOGIN, payload };
};

export const Logout = (payload) => {
  return { type: LOGOUT, payload };
};

export const Registration = (payload) => {
  return { type: REGISTRATION, payload };
};

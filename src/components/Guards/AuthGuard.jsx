import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LOGIN } from '../../RouterConstants/constant';

const AuthGuard = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to={LOGIN} />;
  }
  return <div>{children}</div>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;

import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { LOGIN } from '../../RouterConstants/constant';

const AuthGuard = ({ children }) => {
  if (!localStorage.getItem('TOKEN')) {
    return <Navigate to={LOGIN} />;
  }
  return <div>{children}</div>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;

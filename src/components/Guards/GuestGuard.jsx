import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { COURSES } from '../../RouterConstants/constant';

const GuestGuard = ({ children }) => {
  if (localStorage.getItem('TOKEN')) {
    return <Navigate to={COURSES} />;
  }
  return <div>{children}</div>;
};

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default GuestGuard;

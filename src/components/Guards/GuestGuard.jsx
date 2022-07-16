import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { COURSES } from '../../RouterConstants/constant';

const GuestGuard = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);
  if (isAuth) {
    return <Navigate to={COURSES} />;
  }
  return <div>{children}</div>;
};

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default GuestGuard;

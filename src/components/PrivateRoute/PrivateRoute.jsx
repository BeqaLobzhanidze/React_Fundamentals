import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { COURSES } from '../../RouterConstants/constant';

const PrivateRoute = ({ children }) => {
  const { role } = useSelector((state) => state.user);
  if (role !== 'admin') {
    return <Navigate to={COURSES} />;
  }
  return <div>{children}</div>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

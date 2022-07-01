import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const ConditionalLink = ({ children, to, condition }) =>
  !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

ConditionalLink.propTypes = {
  children: PropTypes.element,
  to: PropTypes.string,
  condition: PropTypes.bool,
};

export default ConditionalLink;

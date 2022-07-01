import { Link } from 'react-router-dom';
import React from 'react';

const ConditionalLink = ({ children, to, condition }) =>
  !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

export default ConditionalLink;

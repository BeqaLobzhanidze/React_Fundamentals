import React from 'react';
import PropTypes from 'prop-types';

import styles from './AuthorItem.module.css';
import Button from '../../../../common/Button/Button';

const AuthorItem = ({ name, onClick, type = 'add' }) => {
  return (
    <div className={styles.addAuthor}>
      <span>{name}</span>
      <Button buttonText={`${type} author`} onClick={onClick} />
    </div>
  );
};

AuthorItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default AuthorItem;

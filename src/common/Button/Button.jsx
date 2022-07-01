import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ buttonText, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

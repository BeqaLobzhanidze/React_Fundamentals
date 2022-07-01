import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(Button);

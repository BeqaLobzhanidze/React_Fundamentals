import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = ({
  labelText,
  placeHolderText,
  onChange,
  value,
  type = 'text',
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor='input'>{labelText}</label>
      <input
        type={type}
        id='input'
        placeholder={placeHolderText}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  placeHolderText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default React.memo(Input);

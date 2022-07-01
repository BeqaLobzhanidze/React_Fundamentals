import React from 'react';
import url from './image/unnamed.jpg';
import PropTypes from 'prop-types';

function Logo({ width = 150, height = 150 }) {
  return (
    <img
      src={url}
      alt='Training Logo'
      // Inline style is bad practice but at that moment i need to make img sizes
      // dynamically and future i won't need to override this style
      style={{ width, height }}
    />
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Logo;

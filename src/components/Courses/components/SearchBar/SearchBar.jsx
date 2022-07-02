import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { SearchByNameOrId } from '../../../../helpers/searchByNameorId';

const SearchBar = ({ copyCoursesList, setCopyCoursesList, coursesList }) => {
  const [keyword, setKeyword] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Input
          placeHolderText='search by name or id'
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            if (!e.target.value) setCopyCoursesList(coursesList);
          }}
        />
        <Button
          buttonText='Search'
          onClick={() => {
            setCopyCoursesList(SearchByNameOrId(copyCoursesList, keyword));
          }}
        />
      </div>
      <Link to='courseCreate'>
        <Button buttonText='Add new Course' />
      </Link>
    </div>
  );
};

SearchBar.propTypes = {
  copyCoursesList: PropTypes.array,
  setCopyCoursesList: PropTypes.func,
  coursesList: PropTypes.array,
};

export default SearchBar;

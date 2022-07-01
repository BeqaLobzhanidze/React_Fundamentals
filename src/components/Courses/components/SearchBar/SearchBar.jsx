import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchBar.module.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { SearchByNameOrId } from '../../../../helpers/searchByNameorId';
import PropTypes from 'prop-types';

function SearchBar({
  copyCoursesList,
  setCopyCoursesList,
  setIsKeywordEmpty,
  coursesList,
}) {
  const [keyword, setKeyword] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Input
          placeHolderText='search by name or id'
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setIsKeywordEmpty(keyword !== '' ? false : true);
            if (isButtonClicked) {
              setCopyCoursesList(coursesList);
              setIsButtonClicked(false);
            }
          }}
        />
        <Button
          buttonText='Search'
          onClick={() => {
            setCopyCoursesList(SearchByNameOrId(copyCoursesList, keyword));
            setIsButtonClicked(true);
          }}
        />
      </div>
      <Link to='courseCreate'>
        <Button buttonText='Add new Course' />
      </Link>
    </div>
  );
}

SearchBar.propTypes = {
  copyCoursesList: PropTypes.array,
  setCopyCoursesList: PropTypes.func,
  setIsKeywordEmpty: PropTypes.func,
  coursesList: PropTypes.array,
};

export default SearchBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/exports';

import styles from './SearchBar.module.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { searchByNameOrId } from '../../../../helpers/searchByNameorId';

const SearchBar = ({ copyCoursesList, setCopyCoursesList }) => {
  const [keyword, setKeyword] = useState('');
  const courses = useSelector((state) => state.courses);
  const user = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Input
          placeHolderText='search by name or id'
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            if (!e.target.value) setCopyCoursesList(courses);
          }}
        />
        <Button
          buttonText='Search'
          onClick={() => {
            setCopyCoursesList(searchByNameOrId(copyCoursesList, keyword));
          }}
        />
      </div>
      {user.name === 'null' || user.role === 'admin' ? (
        <Link to='/courses/add'>
          <Button buttonText='Add new Course' />
        </Link>
      ) : null}
    </div>
  );
};

SearchBar.propTypes = {
  copyCoursesList: PropTypes.array,
  setCopyCoursesList: PropTypes.func,
  coursesList: PropTypes.array,
};

export default SearchBar;

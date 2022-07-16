import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CourseCard from './components/CourseCard/CourseCard';

const Courses = ({ copyCoursesList, setCopyCoursesList }) => {
  const courses = useSelector((state) => state.courses);
  useEffect(() => {
    setCopyCoursesList(courses);
  }, [courses]);

  return (
    <>
      {copyCoursesList.map((courseCard) => (
        <>
          <CourseCard key={courseCard.id} courseCard={courseCard} />
        </>
      ))}
    </>
  );
};

Courses.propTypes = {
  copyCoursesList: PropTypes.array,
  setCoursesList: PropTypes.func,
};

export default Courses;

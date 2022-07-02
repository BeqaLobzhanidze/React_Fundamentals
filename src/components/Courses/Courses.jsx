import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import CourseCard from './components/CourseCard/CourseCard';

const Courses = ({
  authorsList,
  copyCoursesList,
  setCopyCoursesList,
  coursesList,
}) => {
  useEffect(() => {
    setCopyCoursesList(coursesList);
  }, []);
  return (
    <>
      {copyCoursesList.map((courseCard) => (
        <CourseCard
          key={courseCard.id}
          courseCard={courseCard}
          authorsList={authorsList}
        />
      ))}
    </>
  );
};

Courses.propTypes = {
  authorsList: PropTypes.array,
  copyCoursesList: PropTypes.array,
  setCoursesList: PropTypes.func,
  coursesList: PropTypes.array,
};

export default Courses;

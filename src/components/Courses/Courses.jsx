import React from 'react';
import PropTypes from 'prop-types';

import CourseCard from './components/CourseCard/CourseCard';

const Courses = ({
  coursesList,
  authorsList,
  copyCoursesList,
  isKeywordEmpty,
}) => {
  return (
    <>
      {isKeywordEmpty ? (
        <>
          {coursesList.map((courseCard) => (
            <CourseCard
              key={courseCard.id}
              courseCard={courseCard}
              authorsList={authorsList}
            />
          ))}
        </>
      ) : (
        <>
          {copyCoursesList.map((courseCard) => (
            <CourseCard
              key={courseCard.id}
              courseCard={courseCard}
              authorsList={authorsList}
            />
          ))}
        </>
      )}
    </>
  );
};

Courses.propTypes = {
  coursesList: PropTypes.array,
  authorsList: PropTypes.array,
  copyCoursesList: PropTypes.array,
  isKeywordEmpty: PropTypes.bool,
};

export default Courses;

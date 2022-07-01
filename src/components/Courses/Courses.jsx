import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import PropTypes from 'prop-types';

function Courses({
  coursesList,
  authorsList,
  copyCoursesList,
  isKeywordEmpty,
}) {
  return (
    <div>
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
    </div>
  );
}

Courses.propTypes = {
  coursesList: PropTypes.array,
  authorsList: PropTypes.array,
  copyCoursesList: PropTypes.array,
  isKeywordEmpty: PropTypes.bool,
};

export default Courses;

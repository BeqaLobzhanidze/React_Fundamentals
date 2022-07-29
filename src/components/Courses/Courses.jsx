import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import CourseCard from './components/CourseCard/CourseCard';
import { fetchApiServices } from '../../services';

const Courses = ({ copyCoursesList, setCopyCoursesList }) => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    setCopyCoursesList(courses);
  }, [courses, setCopyCoursesList]);

  useEffect(() => {
    dispatch(fetchApiServices.GetAllCourses());
    dispatch(fetchApiServices.GetAllAuthors());
  }, [dispatch]);

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

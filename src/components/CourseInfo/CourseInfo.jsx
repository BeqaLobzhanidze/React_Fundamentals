import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

import Button from '../../common/Button/Button';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { getAuthors } from '../../helpers/getAuthors';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import styles from './CourseInfo.module.css';
import { COURSES } from '../../RouterConstants/constant';

const CourseInfo = () => {
  const { courseId } = useParams();
  const courses = useSelector((state) => state.courses);
  const authors = useSelector((state) => state.authors);
  return (
    <>
      {courses
        .filter((courses) => courses.id === courseId)
        .map((course) => (
          <section
            className={styles.container}
            aria-label='CourseInfo'
            key={course.id}
          >
            <Link to={COURSES}>
              <Button buttonText='< Back to Course' />
            </Link>
            <h1>{course.title}</h1>
            <div className={styles.body}>
              <p className={styles.leftSide}>{course.description}</p>
              <div className={styles.rightSide}>
                <p>
                  <strong>ID</strong>
                  {courseId}
                </p>
                <p>
                  <strong>Duration</strong>
                  {getCourseDuration(course.duration)} hours
                </p>
                <p>
                  <strong>Created</strong>
                  {formatCreationDate(course.creationDate)}
                </p>
                <p>
                  <strong>Authors:</strong>
                  {getAuthors(course.authors, authors).map((authors) => (
                    <span key={authors} className={styles.authors}>
                      {authors}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default CourseInfo;

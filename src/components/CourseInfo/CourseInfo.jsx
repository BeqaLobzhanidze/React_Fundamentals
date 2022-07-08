import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from '../../common/Button/Button';
import { FormatCreationDate } from '../../helpers/formatCreationDate';
import { GetAuthors } from '../../helpers/getAuthors';
import { GetCourseDuration } from '../../helpers/getCourseDuration';
import styles from './CourseInfo.module.css';
import { COURSES } from '../../RouterConstants/constant';

const CourseInfo = ({ courseList, authorsList }) => {
  const { courseId } = useParams();
  return (
    <>
      {courseList
        .filter((courses) => courses.id === courseId)
        .map((course) => (
          <section className={styles.container} aria-label='CourseInfo'>
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
                  {GetCourseDuration(course.duration)} hours
                </p>
                <p>
                  <strong>Created</strong>
                  {FormatCreationDate(course.creationDate)}
                </p>
                <p>
                  <strong>Authors:</strong>
                  {GetAuthors(course.authors, authorsList).map((authors) => (
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

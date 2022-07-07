import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../common/Button/Button';
import styles from './CourseCard.module.css';
import { FormatCreationDate } from '../../../../helpers/formatCreationDate';
import { GetCourseDuration } from '../../../../helpers/getCourseDuration';
import { GetAuthors } from '../../../../helpers/getAuthors';

const CourseCard = ({ courseCard, authorsList }) => {
  const navigate = useNavigate();
  return (
    <article className={styles.container}>
      <div className={styles.leftSide}>
        <h2>{courseCard.title}</h2>
        <p>{courseCard.description}</p>
      </div>
      <div className={styles.rightSide}>
        <p>
          <strong>Authors:</strong>
          {GetAuthors(courseCard.authors, authorsList).map((authors) => (
            <span key={authors} className={styles.authors}>
              {authors}
            </span>
          ))}
        </p>
        <p>
          <strong>Duration:</strong> {GetCourseDuration(courseCard.duration)}
        </p>
        <p>
          <strong className={styles.creationDate}>CreatinDate:</strong>
          {FormatCreationDate(courseCard.creationDate)}
        </p>
        <Button
          buttonText='Show More'
          onClick={() =>
            navigate(`../courses/${courseCard.id}`, {
              state: { courseCard, authorsList },
            })
          }
        />
      </div>
    </article>
  );
};

CourseCard.propTypes = {
  courseCard: PropTypes.object,
  authorsList: PropTypes.array,
};

export default CourseCard;

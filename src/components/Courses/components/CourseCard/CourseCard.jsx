import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

import Button from '../../../../common/Button/Button';
import styles from './CourseCard.module.css';
import { FormatCreationDate } from '../../../../helpers/formatCreationDate';
import { GetCourseDuration } from '../../../../helpers/getCourseDuration';
import { GetAuthors } from '../../../../helpers/getAuthors';

const CourseCard = ({ courseCard }) => {
  const navigate = useNavigate();
  const authors = useSelector((state) => state.authors);
  return (
    <article className={styles.container}>
      <div className={styles.leftSide}>
        <h2>{courseCard.title}</h2>
        <p>{courseCard.description}</p>
      </div>
      <div className={styles.rightSide}>
        <p>
          <strong>Authors:</strong>
          {GetAuthors(courseCard.authors, authors).map((authors) => (
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
          onClick={() => navigate(`../courses/${courseCard.id}`)}
        />
      </div>
    </article>
  );
};

CourseCard.propTypes = {
  courseCard: PropTypes.object,
};

export default CourseCard;

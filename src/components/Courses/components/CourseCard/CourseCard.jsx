import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../../../common/Button/Button';
import styles from './CourseCard.module.css';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { getAuthors } from '../../../../helpers/getAuthors';
import { deleteCourseById } from '../../../../store/courses/thunk';

const CourseCard = ({ courseCard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);
  const user = useSelector((state) => state.user);
  return (
    <article className={styles.container}>
      <div className={styles.leftSide}>
        <h2 data-id='title'>{courseCard.title}</h2>
        <p>{courseCard.description}</p>
      </div>
      <div className={styles.rightSide}>
        <p>
          <strong>Authors:</strong>
          {getAuthors(courseCard.authors, authors).map((authors) => (
            <span key={authors} className={styles.authors}>
              {authors}
            </span>
          ))}
        </p>
        <p>
          <strong>Duration:</strong>
          <span data-testid='duration'>
            {getCourseDuration(courseCard.duration)}
          </span>
        </p>
        <p>
          <strong className={styles.creationDate}>CreatinDate:</strong>
          {formatCreationDate(courseCard.creationDate)}
        </p>
        <div className={styles.buttons}>
          <Button
            buttonText='Show More'
            onClick={() => navigate(`../courses/${courseCard.id}`)}
          />
          {user.role === 'admin' && (
            <>
              <Button
                buttonText='Delete'
                onClick={() =>
                  dispatch(deleteCourseById(courseCard.id, user.token))
                }
              />
              <Button
                buttonText='Update'
                onClick={() =>
                  navigate(`../courses/update/${courseCard.id}`, {
                    state: courseCard,
                  })
                }
              />
            </>
          )}
        </div>
      </div>
    </article>
  );
};

CourseCard.propTypes = {
  courseCard: PropTypes.object,
};

export default CourseCard;

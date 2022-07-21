import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import styles from './CourseForm.module.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { correctAuthorsFormat } from '../../helpers/correctAuthorsFormat';
import { doubleAuthorCheck } from '../../helpers/doubleAuthorsCheck';
import ConditionalLink from './utills/ConditionalLink';
import { isEmptyForm } from '../../helpers/isEmptyForm';
import { getAuthors } from '../../helpers/getAuthors';
import { getExactCreationDate } from '../../helpers/getExactCreateDate';
import { AddCourses } from '../../store/courses/actions';
import { AddAuthors } from '../../store/authors/actions';
import { courseAddPost } from '../../HTTPRequests/courseAddPost';
import { getAuthorsWithId } from '../../helpers/getAuthorsWithId';
import { courseUpdatePut } from '../../HTTPRequests/courseUpdatePut';

const CourseForm = ({
  addAuthor,
  deleteAuthor,
  createAuthor,
  newCourseAuthors,
  customAuthor,
  setCustomAuthor,
  copyAuthorList,
  needUpdate = false,
  setNewCourseAuthors,
  setCopyAuthorList,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  const location = useLocation();
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);
  const user = useSelector((state) => state.user);

  const CreateNewCourse = () => {
    if (isEmptyForm(title, description, newCourseAuthors, duration)) {
      alert('Fill form correctly');
      return;
    }

    courseAddPost(
      {
        title,
        description,
        duration: Number(duration),
        authors: correctAuthorsFormat(newCourseAuthors),
      },
      user.token
    );
    dispatch(
      AddCourses({
        id: Math.random().toString(36).substr(2, 9),
        title,
        description,
        creationDate: getExactCreationDate(),
        duration: Number(duration),
        authors: correctAuthorsFormat(newCourseAuthors),
      })
    );
    dispatch(AddAuthors(...doubleAuthorCheck(authors, newCourseAuthors)));
  };

  const UpdateCourse = () => {
    courseUpdatePut(
      courseId,
      {
        title,
        description,
        duration: Number(duration),
        authors: correctAuthorsFormat(newCourseAuthors),
      },
      user.token
    );
  };

  useEffect(() => {
    if (needUpdate) {
      setTitle(location.state.title);
      setDescription(location.state.description);
      setDuration(location.state.duration);
      setNewCourseAuthors(getAuthorsWithId(location.state.authors, authors));
      setCopyAuthorList(
        copyAuthorList.filter(
          (copyAuthor) =>
            !getAuthors(location.state.authors, authors).includes(
              copyAuthor.name
            )
        )
      );
    }
  }, []);

  return (
    <section
      className={styles.container}
      aria-label='Form to create new Course'
    >
      <div className={styles.title}>
        <Input
          labelText='Title'
          placeHolderText='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ConditionalLink
          to='/courses'
          condition={
            !isEmptyForm(title, description, newCourseAuthors, duration)
          }
        >
          {needUpdate ? (
            <Button buttonText='Update Course' onClick={UpdateCourse} />
          ) : (
            <Button buttonText='Create Course' onClick={CreateNewCourse} />
          )}
        </ConditionalLink>
      </div>
      <div className={styles.textarea}>
        <label>Description:</label>
        <textarea
          placeholder='Enter Description'
          minLength={2}
          className={styles.placeholder}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.authorsCreation}>
        <div className={styles.leftAside}>
          <>
            <h2>Add author</h2>
            <Input
              labelText='Author Name'
              placeHolderText=' Enter author name..'
              value={customAuthor}
              onChange={(e) => setCustomAuthor(e.target.value)}
            />
            <Button buttonText='create author' onClick={createAuthor} />
          </>
          <>
            <h2>Duration</h2>
            <Input
              labelText='Duration'
              placeHolderText='Enter duration ...'
              type='number'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <h4>Duration: {getCourseDuration(duration)} hours</h4>
          </>
        </div>
        <div className={styles.rightAside}>
          <div className={styles.auth}>
            <h2>Authors</h2>
            {copyAuthorList.map(({ name, id }) => (
              <AuthorItem name={name} key={id} onClick={() => addAuthor(id)} />
            ))}
          </div>
          <div className={styles.auth}>
            <h2>Course authors</h2>
            {newCourseAuthors.length !== 0 ? (
              newCourseAuthors.map(({ id, name }) => (
                <AuthorItem
                  name={name}
                  type='delete'
                  key={id}
                  onClick={() => deleteAuthor(id)}
                />
              ))
            ) : (
              <p>authors list is empty</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

CourseForm.propTypes = {
  addAuthor: PropTypes.func,
  deleteAuthor: PropTypes.func,
  createCourse: PropTypes.func,
  newCourseAuthors: PropTypes.array,
  customAuthor: PropTypes.string,
  setCustomAuthor: PropTypes.func,
  copyAuthorList: PropTypes.array,
};

export default CourseForm;

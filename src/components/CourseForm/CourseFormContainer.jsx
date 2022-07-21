import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { authorsAddPost } from '../../HTTPRequests/authorsAddPost';
import { AddAuthors } from '../../store/authors/actions';

import CourseForm from './CourseForm';

const CreateCourseWrapper = ({ needUpdate }) => {
  const authors = useSelector((state) => state.authors);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newCourseAuthors, setNewCourseAuthors] = useState([]);
  const [copyAuthorList, setCopyAuthorList] = useState(authors);
  const [customAuthor, setCustomAuthor] = useState('');
  const createAuthor = () => {
    const id = '66cc289e-6de9-49b2-9ca7-8b4f409d6467';
    setCopyAuthorList((prevAuthor) => [
      ...prevAuthor,
      { name: customAuthor, id },
    ]);
    authorsAddPost(customAuthor, user.token);
    dispatch(AddAuthors({ name: customAuthor, id }));
    setCustomAuthor('');
  };

  const addAuthor = (id) => {
    let AddedAuthor = copyAuthorList.find((author) => author.id === id);
    setNewCourseAuthors((prevAuthor) => [...prevAuthor, AddedAuthor]);
    setCopyAuthorList(copyAuthorList.filter((author) => author.id !== id));
  };

  const deleteAuthor = (id) => {
    let DeletedAuthor = newCourseAuthors.find((author) => author.id === id);
    setCopyAuthorList((prevAuthor) => [...prevAuthor, DeletedAuthor]);
    setNewCourseAuthors(newCourseAuthors.filter((author) => author.id !== id));
  };

  return (
    <CourseForm
      addAuthor={addAuthor}
      deleteAuthor={deleteAuthor}
      createAuthor={createAuthor}
      newCourseAuthors={newCourseAuthors}
      customAuthor={customAuthor}
      setCustomAuthor={setCustomAuthor}
      copyAuthorList={copyAuthorList}
      needUpdate={needUpdate}
      setNewCourseAuthors={setNewCourseAuthors}
      setCopyAuthorList={setCopyAuthorList}
    />
  );
};

export default CreateCourseWrapper;

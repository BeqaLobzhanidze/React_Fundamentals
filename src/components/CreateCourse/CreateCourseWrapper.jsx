import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AddAuthors } from '../../store/authors/actions';

import CreateCourse from './CreateCourse';

const CreateCourseWrapper = () => {
  const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();
  const [newCourseAuthors, setNewCourseAuthors] = useState([]);
  const [copyAuthorList, setCopyAuthorList] = useState(authors);
  const [customAuthor, setCustomAuthor] = useState('');

  const CreateAuthor = () => {
    const id = '66cc289e-6de9-49b2-9ca7-8b4f409d6467';
    setCopyAuthorList((prevAuthor) => [
      ...prevAuthor,
      { name: customAuthor, id },
    ]);

    dispatch(AddAuthors({ name: customAuthor, id }));

    setCustomAuthor('');
  };

  const AddAuthor = (id) => {
    let AddedAuthor = copyAuthorList.find((author) => author.id === id);
    setNewCourseAuthors((prevAuthor) => [...prevAuthor, AddedAuthor]);
    setCopyAuthorList(copyAuthorList.filter((author) => author.id !== id));
  };

  const DeleteAuthor = (id) => {
    let DeletedAuthor = newCourseAuthors.find((author) => author.id === id);
    setCopyAuthorList((prevAuthor) => [...prevAuthor, DeletedAuthor]);
    setNewCourseAuthors(newCourseAuthors.filter((author) => author.id !== id));
  };

  return (
    <CreateCourse
      AddAuthor={AddAuthor}
      DeleteAuthor={DeleteAuthor}
      CreateAuthor={CreateAuthor}
      newCourseAuthors={newCourseAuthors}
      customAuthor={customAuthor}
      setCustomAuthor={setCustomAuthor}
      copyAuthorList={copyAuthorList}
    />
  );
};

export default CreateCourseWrapper;

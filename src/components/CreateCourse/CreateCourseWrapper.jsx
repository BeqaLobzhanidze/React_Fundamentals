import React, { useState } from 'react';
import CreateCourse from './CreateCourse';

const CreateCourseWrapper = ({
  authorsList,
  setAuthorList,
  setCoursesList,
}) => {
  const [newCourseAuthors, setNewCourseAuthors] = useState([]);
  const [copyAuthorList, setCopyAuthorList] = useState(authorsList);
  const [customAuthor, setCustomAuthor] = useState('');

  const CreateAuthor = () => {
    setCopyAuthorList((prevAuthor) => [
      ...prevAuthor,
      { name: customAuthor, id: Math.random().toString(36).substr(2, 9) },
    ]);
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
      setCoursesList={setCoursesList}
      setAuthorList={setAuthorList}
      newCourseAuthors={newCourseAuthors}
      customAuthor={customAuthor}
      setCustomAuthor={setCustomAuthor}
      copyAuthorList={copyAuthorList}
    />
  );
};

export default CreateCourseWrapper;

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import Courses from './components/Courses/Courses';
import CreateCourseWrapper from './components/CreateCourse/CreateCourseWrapper';

const PageRouter = () => {
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  const [authorsList, setAuthorList] = useState(mockedAuthorsList);
  const [copyCoursesList, setCopyCoursesList] = useState(mockedCoursesList);
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <SearchBar
              copyCoursesList={copyCoursesList}
              setCopyCoursesList={setCopyCoursesList}
              coursesList={coursesList}
            />
            <Courses
              coursesList={coursesList}
              authorsList={authorsList}
              copyCoursesList={copyCoursesList}
              setCopyCoursesList={setCopyCoursesList}
            />
          </>
        }
      />
      <Route
        path='/courseCreate'
        element={
          <CreateCourseWrapper
            authorsList={authorsList}
            setAuthorList={setAuthorList}
            setCoursesList={setCoursesList}
          />
        }
      />
    </Routes>
  );
};

export default PageRouter;

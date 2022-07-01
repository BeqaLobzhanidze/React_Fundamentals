import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import Courses from './components/Courses/Courses';
import CreateCourseWrapper from './components/CreateCourse/CreateCourseWrapper';

function App() {
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  const [authorsList, setAuthorList] = useState(mockedAuthorsList);
  const [copyCoursesList, setCopyCoursesList] = useState(mockedCoursesList);
  const [isKeywordEmpty, setIsKeywordEmpty] = useState(true);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <SearchBar
                copyCoursesList={copyCoursesList}
                setCopyCoursesList={setCopyCoursesList}
                coursesList={coursesList}
                setIsKeywordEmpty={setIsKeywordEmpty}
              />
              <Courses
                coursesList={coursesList}
                authorsList={authorsList}
                copyCoursesList={copyCoursesList}
                isKeywordEmpty={isKeywordEmpty}
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
    </>
  );
}

export default App;

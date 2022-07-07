import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import Courses from './components/Courses/Courses';
import CreateCourseWrapper from './components/CreateCourse/CreateCourseWrapper';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import AuthGuard from './components/Guards/AuthGuard';
import GuestGuard from './components/Guards/GuestGuard';
import {
  COURSES,
  COURSESADD,
  COURSESID,
  REGISTRATION,
  LOGIN,
} from './RouterConstants/constant';

const PageRouter = () => {
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  const [authorsList, setAuthorList] = useState(mockedAuthorsList);
  const [copyCoursesList, setCopyCoursesList] = useState(mockedCoursesList);
  return (
    <Routes>
      <Route path='/' element={<Navigate to={COURSES} />} />
      <Route
        path={COURSES}
        element={
          <AuthGuard>
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
          </AuthGuard>
        }
      />
      <Route
        path={COURSESADD}
        element={
          <AuthGuard>
            <CreateCourseWrapper
              authorsList={authorsList}
              setAuthorList={setAuthorList}
              setCoursesList={setCoursesList}
            />
          </AuthGuard>
        }
      />
      <Route
        path={COURSESID}
        element={
          <AuthGuard>
            <CourseInfo />
          </AuthGuard>
        }
      />
      <Route
        path={REGISTRATION}
        element={
          <GuestGuard>
            <Registration />
          </GuestGuard>
        }
      />
      <Route
        path={LOGIN}
        element={
          <GuestGuard>
            <Login />
          </GuestGuard>
        }
      />
    </Routes>
  );
};

export default PageRouter;

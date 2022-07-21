import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import Courses from './components/Courses/Courses';
import CourseFormContainer from './components/CourseForm/CourseFormContainer';
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
  UPDATE_COURSE_ID,
} from './RouterConstants/constant';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const PageRouter = () => {
  const [copyCoursesList, setCopyCoursesList] = useState([]);
  return (
    <Routes>
      <Route path='/' element={<Navigate to={COURSES} />} />
      <Route
        path={COURSES}
        element={
          <AuthGuard>
            <>
              <SearchBar
                copyCoursesList={copyCoursesList}
                setCopyCoursesList={setCopyCoursesList}
              />
              <Courses
                copyCoursesList={copyCoursesList}
                setCopyCoursesList={setCopyCoursesList}
              />
            </>
          </AuthGuard>
        }
      />
      <Route
        path={COURSESADD}
        element={
          <AuthGuard>
            <PrivateRoute>
              <CourseFormContainer />
            </PrivateRoute>
          </AuthGuard>
        }
      />
      <Route
        path={COURSESID}
        element={
          <AuthGuard>
            <PrivateRoute>
              <CourseInfo />
            </PrivateRoute>
          </AuthGuard>
        }
      />
      <Route
        path={UPDATE_COURSE_ID}
        element={
          <AuthGuard>
            <PrivateRoute>
              <CourseFormContainer needUpdate={true} />
            </PrivateRoute>
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

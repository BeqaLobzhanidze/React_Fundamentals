import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import { mockedCoursesList } from './constants';
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
import { fetchApiServices } from './services';
import { GetInitialCourses } from './store/courses/actions';
import { GetInitialAuthors } from './store/authors/actions';

const PageRouter = () => {
  const [copyCoursesList, setCopyCoursesList] = useState(mockedCoursesList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiServices.GetAllCourses().then((data) => {
      dispatch(GetInitialCourses(data));
    });
    fetchApiServices.GetAllAuthors().then((data) => {
      dispatch(GetInitialAuthors(data));
    });
  }, []);

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
            />
            <Courses
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
            <CreateCourseWrapper />
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

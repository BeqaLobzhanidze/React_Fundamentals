import { ADD_COURSES, DELETE_COURSES, INITIAL_VALUE } from './types';

export const AddCourses = (course) => {
  return { type: ADD_COURSES, payload: course };
};

export const DeleteCourses = (id) => {
  return { type: DELETE_COURSES, payload: id };
};

export const GetInitialCourses = (payload) => {
  return { type: INITIAL_VALUE, payload };
};

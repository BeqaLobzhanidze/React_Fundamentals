import { ADD_COURSES, DELETE_COURSES } from './types';

export const AddCourses = (course) => {
  return { type: ADD_COURSES, payload: course };
};

export const DeleteCourses = (id) => {
  return { type: DELETE_COURSES, payload: id };
};

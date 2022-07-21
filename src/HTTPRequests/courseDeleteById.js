import { DeleteCourses } from '../store/courses/actions';

export const deleteCourseById = (id, token) => {
  return async function (dispatch) {
    await fetch(`http://localhost:4000/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    dispatch(DeleteCourses(id));
  };
};

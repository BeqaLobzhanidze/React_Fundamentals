import { AddCourses, DeleteCourses } from './actions';

const courseAddPost = (user, token, dispatchUser) => {
  return async function (dispatch) {
    try {
      await fetch('http://localhost:4000/courses/add', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      dispatch(AddCourses(dispatchUser));
    } catch (error) {
      throw new Error(error);
    }
  };
};

const deleteCourseById = (id, token) => {
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
export { courseAddPost, deleteCourseById };

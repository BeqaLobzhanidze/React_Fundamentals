import { GetInitialAuthors } from './store/authors/actions';
import { GetInitialCourses } from './store/courses/actions';

export const fetchApiServices = {
  GetAllCourses: () => {
    return async function (dispatch) {
      const response = await fetch('http://localhost:4000/courses/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      dispatch(GetInitialCourses(result.result));
    };
  },
  GetAllAuthors: () => {
    return async function (dispatch) {
      const response = await fetch('http://localhost:4000/authors/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      dispatch(GetInitialAuthors(result.result));
    };
  },
};

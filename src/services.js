import axios from 'axios';
export const fetchApiServices = {
  GetAllCourses: function () {
    try {
      return axios
        .get('http://localhost:4000/courses/all')
        .then((data) => data.data.result);
    } catch (error) {
      throw new Error(error);
    }
  },
  GetAllAuthors: function () {
    try {
      return axios
        .get('http://localhost:4000/authors/all')
        .then((data) => data.data.result);
    } catch (error) {
      throw new Error(error);
    }
  },
};

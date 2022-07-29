import { courseReducer } from '../reducer';
import { ADD_COURSES } from '../types';

const initialState = [];

const courses = {
  id: 1,
  title: 'testCourse',
  description: 'description',
  authors: [
    '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
    '1c972c52-3198-4098-b6f7-799b45903199',
    'bd0a513e-f5a1-40f0-9cdf-5cb7a69c0491',
  ],
  duration: 10,
  creationDate: '18/07/2022',
};

describe('reducer', () => {
  test('return initial state', () => {
    expect(courseReducer(initialState, { type: 'Non existing' })).toEqual(
      initialState
    );
  });
  test('return initial state', () => {
    expect(
      courseReducer(initialState, { type: ADD_COURSES, payload: courses })
    ).toEqual([courses]);
  });
});

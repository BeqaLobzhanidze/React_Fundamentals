import { render, screen } from '@testing-library/react';
import Courses from '../Courses';
const courses = [
  {
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
  },
  {
    id: 2,
    title: 'testCourse',
    description: 'description',
    authors: [
      '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
      '1c972c52-3198-4098-b6f7-799b45903199',
      'bd0a513e-f5a1-40f0-9cdf-5cb7a69c0491',
    ],
    duration: 10,
    creationDate: '18/07/2022',
  },
];
const state = [
  { name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
  { name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
];
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useSelector: () => mockUseSelector(),
  useDispatch: () => jest.fn,
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn,
}));

describe('Courses', () => {
  beforeEach(() => mockUseSelector.mockReturnValue(state));
  test('createDate should be a correct format', () => {
    render(
      <Courses copyCoursesList={courses} setCopyCoursesList={() => jest.fn} />
    );
    const coursesLength = screen.getAllByRole('article').length;
    expect(coursesLength).toBe(courses.length);
  });
});

import { render, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import { getCourseDuration } from '../../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../../helpers/formatCreationDate';

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

describe('CourseCard', () => {
  beforeEach(() => mockUseSelector.mockReturnValue(state));
  beforeEach(() => {
    render(<CourseCard courseCard={courses} />);
  });
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
  test('should display title', () => {
    const title = screen.queryByText(courses.title);
    expect(title).toBeInTheDocument();
  });
  test('should display description', () => {
    const description = screen.queryByText(courses.description);
    expect(description).toBeInTheDocument();
  });
  test('duration should be in the correct format', () => {
    const correctFormat = getCourseDuration(courses.duration);
    const duration = screen.queryByText(correctFormat);
    expect(duration).toHaveTextContent('00:10');
  });
  test('courseCard should display authors list', () => {
    const authorsList = state.map((item) => screen.queryByText(item.name));
    expect(authorsList).toBeTruthy();
  });
  test('createDate should be a correct format', () => {
    const creationDate = screen.queryByText(
      formatCreationDate(courses.creationDate)
    );
    expect(creationDate).toHaveTextContent('18.07.2022');
  });
});

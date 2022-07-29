import { render, screen, waitFor } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useSelector: () => mockUseSelector(),
  useDispatch: () => jest.fn,
}));

describe('SearchBar', () => {
  beforeEach(() =>
    mockUseSelector.mockReturnValue({ role: 'admin', name: null })
  );
  test('when we click add new Course then CourseForm should be appear', () => {
    render(
      <BrowserRouter>
        <SearchBar
          copyCoursesList={courses}
          setCopyCoursesList={() => jest.fn}
        />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText('Add new Course'));
    waitFor(() => expect(screen.getByRole('section')).toBeInTheDocument());
  });
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store';
import { Provider } from 'react-redux';
import Header from '../Header';

test('should Header have logo', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const LogoElement = screen.getByTestId('logo-1');
  expect(LogoElement).toBeInTheDocument();
});

test('Header shoudn have userName', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const userName = screen.queryByText('TestUser');

  expect(userName).toBeDefined();
});

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import middleware from '../middleware';
import App from './App';

test('renders would you rather app', () => {
  const store = createStore(rootReducer, middleware);
  render(<App />, {wrapper: ({children}) => <Provider store={store}>{children}</Provider>});
  const titleElement = screen.getByText(/would you rather/i);
  expect(titleElement).toBeInTheDocument();
});

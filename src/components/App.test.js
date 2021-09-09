import { render, screen } from '@testing-library/react';
import App from './App';

test('renders would you rather app', () => {
  render(<App />);
  const titleElement = screen.getByText(/would you rather/i);
  expect(titleElement).toBeInTheDocument();
});

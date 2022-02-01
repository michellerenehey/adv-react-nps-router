import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: 'National Parks Are Cool' });
  expect(heading).toBeInTheDocument();
});

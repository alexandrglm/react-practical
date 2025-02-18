import { render, screen } from '@testing-library/react';
import App from './App';
import { ItemProvider } from './context/items.context';

test('renders app title', () => {
  render(<ItemProvider><App  /></ItemProvider>);
  const titleElement = screen.getByRole('heading', {text: 'Billy'});
  
  expect(titleElement).toBeInTheDocument();
});

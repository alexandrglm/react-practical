import { render, screen } from '@testing-library/react';
import App from './App'; 
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'

test('link to about page', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()
  const headingElement = screen.getByRole('heading', {name: 'Default component'});
  expect(headingElement).toBeInTheDocument(); 

  const linkElement = screen.getAllByRole('link', { name: 'About' });
  await user.click(linkElement[0])

  const headingElement2 = screen.getByRole('heading', {name: 'About component'});
  expect(headingElement2).toBeInTheDocument();
});

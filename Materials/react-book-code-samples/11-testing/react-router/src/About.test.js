import { screen } from '@testing-library/react';
import About from './App'; 
import React from 'react'
import '@testing-library/jest-dom';
import renderWithRouter from './testUtils';

test('tests about links to home' , async () => {
    const {user} = renderWithRouter(<About />, {route: '/about'})
  const headingElement = screen.getByRole('heading', {name: 'About component'});
  expect(headingElement).toBeInTheDocument(); 

  const linkElement = screen.getAllByRole('link', { name: 'Home' });
  await user.click(linkElement[0])

  const headingElement2 = screen.getByRole('heading', {name: 'Default component'});
  expect(headingElement2).toBeInTheDocument(); 
});

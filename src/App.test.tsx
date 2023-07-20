import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { router } from './Router';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);
  const linkElement = screen.getByText(/Chez vous, partout et ailleurs/i);
  expect(linkElement).toBeInTheDocument();
});

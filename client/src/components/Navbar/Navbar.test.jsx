import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '.';

test('HAPPY PATH: on Navbar render, should have Zendesk Intern brand', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const brandLinkElement = screen.getByText(/Zendesk Intern/i);
  const dashboardLinkElement = screen.getByText(/Dashboard/i);
  expect(brandLinkElement).toBeInTheDocument();
  expect(dashboardLinkElement).toBeInTheDocument();
});

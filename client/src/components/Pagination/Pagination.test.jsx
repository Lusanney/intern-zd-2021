import { render, screen } from '@testing-library/react';
import React from 'react';
import Pagination from '.';

test('HAPPY PATH: on render, should have default Navigate buttons', () => {
  render(
    <Pagination currentPage={2} lastPage={5} />,
  );

  const goEndEl = screen.getByText(/»/i);
  const goNextEl = screen.getByText(/›/i);
  const goStartEl = screen.getByText(/«/i);
  const goPrevEl = screen.getByText(/‹/i);

  expect(goEndEl).toBeInTheDocument();
  expect(goNextEl).toBeInTheDocument();
  expect(goStartEl).toBeInTheDocument();
  expect(goPrevEl).toBeInTheDocument();
});

test('EDGE: on current page is 1, cannot go previous', () => {
  render(
    <Pagination currentPage={1} lastPage={5} />,
  );

  const goPrevEl = screen.getByText(/‹/i);
  expect(goPrevEl.closest('li')).toHaveClass('disabled');
});

test('EDGE: on current page is last page, cannot go forward', () => {
  render(
    <Pagination currentPage={5} lastPage={5} />,
  );

  const goPrevEl = screen.getByText(/›/i);
  expect(goPrevEl.closest('li')).toHaveClass('disabled');
});

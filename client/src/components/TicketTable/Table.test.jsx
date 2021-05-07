import { render, screen } from '@testing-library/react';
import React from 'react';
import Table from './Table.view';
import mockTickets from './mockTickets.json';

test('HAPPY PATH: on TicketTable render, should render a table', () => {
  render(
    <Table tickets={mockTickets} />,
  );

  expect(screen.getByTestId('ticket-table')).toBeTruthy();
});

test('HAPPY PATH: on TicketTable render, should render 7 records', () => {
  render(
    <Table tickets={mockTickets} />,
  );

  // exclude header
  expect(screen.getByTestId('ticket-table').rows).toHaveLength(8);
});

test('HAPPY PATH: on TicketTable render with no record, should render 0 record', () => {
  render(
    <Table tickets={[]} />,
  );

  // exclude header
  expect(screen.getByTestId('ticket-table').rows).toHaveLength(1);
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TicketDetail from './TicketDetail.view';
import mockTicket from './mockTicket.json';

test('HAPPY PATH: on TicketDetail render with a valid Ticket, should render all the information', () => {
  render(
    <TicketDetail ticket={mockTicket} />,
  );

  expect(screen.getByTestId('ticket-subject')).toHaveTextContent('testing subject');
  expect(screen.getByTestId('ticket-description')).toHaveTextContent('just another description that you might like to read');
  expect(screen.getByTestId('ticket-status')).toHaveTextContent('open');
  expect(screen.getByTestId('ticket-createdAt')).toHaveTextContent((new Date(mockTicket.created_at)).toLocaleString());
  expect(screen.getByTestId('ticket-requester')).toHaveTextContent('1231112');
});

test('EDGE: on TicketDetail render with an invalid date', () => {
  mockTicket.created_at = '22';
  render(
    <TicketDetail ticket={mockTicket} />,
  );

  expect(screen.getByTestId('ticket-subject')).toHaveTextContent('testing subject');
  expect(screen.getByTestId('ticket-description')).toHaveTextContent('just another description that you might like to read');
  expect(screen.getByTestId('ticket-status')).toHaveTextContent('open');
  expect(screen.getByTestId('ticket-createdAt')).toHaveTextContent('Created: Invalid Date');
  expect(screen.getByTestId('ticket-requester')).toHaveTextContent('1231112');
});

test('EDGE: on TicketDetail render with empty ticket', () => {
  render(
    <MemoryRouter>
      <TicketDetail ticket={{}} />
    </MemoryRouter>,
  );

  expect(screen.getByText('Sorry, the ticket you are looking for is not found')).toBeInTheDocument();
  expect(screen.getByTestId('go-dashboard')).toBeInTheDocument();
});

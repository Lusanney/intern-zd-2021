import React from 'react';
import { Link } from 'react-router-dom';

/**
 * TicketEmpty view shows UI when the ticket is not found
 */
const TicketEmpty = () => (
  <section className="TicketDetail mt-5">
    <h1>Sorry, the ticket you are looking for is not found</h1>
    <h3>
      Please go back to Dashboard with the link:

      <Link to="/" className="ms-3 btn btn-outline-primary" data-testid="go-dashboard">Dashboard</Link>
    </h3>
  </section>

);

export default TicketEmpty;

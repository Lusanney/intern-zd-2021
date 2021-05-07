import React from 'react';
import { formatDate, badgeBg } from '../../utils';
import TicketEmpty from './TicketEmpty.view';

/**
 * TicketDetail view, shows all the ticket details when
 * ticket data is not empty
 * @returns 
 */
const TicketDetailView = ({ ticket, isLoading }) => {
  const isTicketFound = Object.keys(ticket).length !== 0;

  return (
    isTicketFound || isLoading ? (
      <section className="TicketDetail mt-5">

        <div className="row">
          <h2 data-testid="ticket-subject">{ticket.subject}</h2>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="requester-group-badge">
              Requester:
              {' '}
              <span data-testid="ticket-requester">

                {ticket.requester_id}

              </span>
              <span data-testid="ticket-status" className={`badge rounded-pill ms-3 px-4 ${badgeBg(ticket.status)}`}>
                {ticket.status}
              </span>
            </div>
          </div>

          <div className="col" data-testid="ticket-createdAt">
            Created:
            {' '}
            {formatDate(ticket.created_at)}
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <b>Description</b>
            <p style={{ textJustify: 'auto' }} data-testid="ticket-description">{ticket.description}</p>
          </div>

        </div>

      </section>
    ) : <TicketEmpty />
  );
};

export default React.memo(TicketDetailView);

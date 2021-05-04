import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTicketByIdAPI } from '../../apis/ticket.api';

const TicketDetail = () => {
  const { ticketId } = useParams();
  const [getTicket, setTicket] = useState({});

  useEffect(() => {
    getTicketByIdAPI(ticketId)
      .then((response) => {
        if (response.data) {
          setTicket(response.data.ticket);
        }
      });
  });

  return (
    <section className="TicketDetail">
      <div className="row">
        <h2>{getTicket.subject}</h2>
      </div>

      <div className="row">
        <div className="col">
          <div className="requester-group-badge">
            Requester:
            {' '}
            {getTicket.requester_id}
          </div>
          <div className="status-badge">
            Status:
            {' '}
            {getTicket.status}
          </div>
        </div>

        <div className="col">
          Created:
          {' '}
          {getTicket.created_at}
        </div>
      </div>

      <div className="row mt-3">
        <label>Description</label>
        <p>{getTicket.description}</p>
      </div>

    </section>
  );
};

export default TicketDetail;

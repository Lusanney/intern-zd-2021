import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTicketByIdAPI } from '../../apis/ticket.api';
import { formatDate, badgeBg } from '../../utils';

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
    <section className="TicketDetail mt-5">

      <div className="row">
        <h2>{getTicket.subject}</h2>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="requester-group-badge">
            Requester:
            {' '}
            {getTicket.requester_id}
            <span className={`badge rounded-pill ms-3 px-4 ${badgeBg(getTicket.status)}`}>
              {getTicket.status}
            </span>
          </div>
          <div className="status-badge" />

        </div>

        <div className="col">
          Created:
          {' '}
          {formatDate(getTicket.created_at)}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <b>Description</b>
          <p style={{ textJustify: 'auto' }}>{getTicket.description}</p>
        </div>

      </div>

    </section>
  );
};

export default TicketDetail;

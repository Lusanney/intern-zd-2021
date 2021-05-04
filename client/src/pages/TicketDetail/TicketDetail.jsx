import React from 'react';
import { useParams } from 'react-router-dom';

const TicketDetail = () => {
  const { ticketId } = useParams();

  return (
    <section className="TicketDetail">
      <h1>
        Hello TicketDetail
        {' '}
        {ticketId}
      </h1>
    </section>
  );
};

export default TicketDetail;

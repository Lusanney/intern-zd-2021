import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTicketByIdAPI } from '../../apis/ticket.api';
import ErrorBoundary from '../../components/ErrorBoundary';
import TicketDetailView from './TicketDetail.view';

/**
 * TicketDetail page, where showing Ticket details
 * @returns 
 */
const TicketDetail = () => {
  // Id of the ticket based on URL
  const { ticketId } = useParams();
  const [getTicket, setTicket] = useState({});

  // Loading state
  const [getLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTicketByIdAPI(ticketId)
      .then((response) => {
        if (response.data) {
          setTicket(response.data.ticket);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [ticketId]);

  return (
    <ErrorBoundary>
      <TicketDetailView ticket={getTicket} isLoading={getLoading} />
    </ErrorBoundary>

  );
};

export default React.memo(TicketDetail);

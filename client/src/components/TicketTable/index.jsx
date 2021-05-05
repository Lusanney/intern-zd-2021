import React, { useEffect, useState } from 'react';
import { getAllTicketsAPI } from '../../apis/ticket.api';
import Table from './Table';
import Pagination from '../Pagination';
import ErrorBoundary from '../ErrorBoundary';

const TicketTable = () => {
  const [getTickets, setTickets] = useState([]);
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getLastPage, setLastPage] = useState(1);
  const perPage = 25;

  useEffect(() => {
    getAllTicketsAPI(perPage, getCurrentPage)
      .then((response) => {
        if (response.data) {
          setTickets(response.data.tickets);
          setLastPage(Math.floor((response.data.count - 1) / perPage) + 1);
        }
      });
  }, [getCurrentPage]);

  return (
    <ErrorBoundary>
      <Table tickets={getTickets} />
      <Pagination
        currentPage={getCurrentPage}
        lastPage={getLastPage}
        onPageClick={(page) => setCurrentPage(page)}
      />
    </ErrorBoundary>
  );
};

export default React.memo(TicketTable);

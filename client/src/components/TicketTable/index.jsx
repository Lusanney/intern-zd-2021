import React, { useEffect, useState } from 'react';
import { getAllTicketsAPI } from '../../apis/ticket.api';
import Table from './Table';
import Pagination from '../Pagination/index';

const TicketTable = () => {
  const [getTickets, setTickets] = useState([]);
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getLastPage, setLastPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    getAllTicketsAPI(perPage, getCurrentPage)
      .then((response) => {
        if (response.data) {
          setTickets(response.data.tickets);
          setLastPage(response.data.count / perPage);
        }
      });
  }, [getCurrentPage]);

  return (
    <>
      <Table tickets={getTickets} />
      <Pagination
        currentPage={getCurrentPage}
        lastPage={getLastPage}
        onPageClick={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default TicketTable;

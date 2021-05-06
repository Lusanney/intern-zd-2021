import React from 'react';
import TicketTable from '../../components/TicketTable';

const Dashboard = () => (
  <section className="Dashboard mt-5">
    <h1 className="mb-5">Ticket table for tickets at lusanney.zendesk.com</h1>
    <TicketTable />
  </section>
);

export default React.memo(Dashboard);

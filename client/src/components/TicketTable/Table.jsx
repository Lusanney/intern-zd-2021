import React from 'react';
import './Table.css';
import { useHistory } from 'react-router-dom';
import { formatDate, badgeBg } from '../../utils';

const Table = ({ tickets }) => {
  const history = useHistory();
  return (
    <table className="table table-hover ticket-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Status</th>
          <th scope="col">Subject</th>
          <th scope="col">Requester</th>
          <th scope="col">Requester updated</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id} onClick={() => history.push(`/ticket/${ticket.id}`)}>
            <th scope="row">{ticket.id}</th>
            <th scope="col">
              <span className={`badge rounded-pill ms-3 px-4 ${badgeBg(ticket.status)}`}>
                {ticket.status}
              </span>
            </th>
            <td>{ticket.subject}</td>
            <td>{ticket.requester_id}</td>
            <td>{formatDate(ticket.updated_at)}</td>
          </tr>
        ))}
        <tr />
      </tbody>
    </table>
  );
};
export default Table;

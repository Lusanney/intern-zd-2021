import React from 'react';
import './Table.css';
import { useHistory } from 'react-router-dom';

const Table = ({ tickets }) => {
  const history = useHistory();
  return (
    <table className="table table-hover ticket-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Subject</th>
          <th scope="col">Requester</th>
          <th scope="col">Requester updated</th>
          <th scope="col">Group</th>
          <th scope="col">Assignee</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id} onClick={() => history.push(`/ticket/${ticket.id}`)}>
            <th scope="row">{ticket.id}</th>
            <td>{ticket.subject}</td>
            <td>{ticket.requester_id}</td>
            <td>{ticket.updated_at}</td>
            <td>{ticket.group_id}</td>
            <td>{ticket.assignee_id}</td>
          </tr>
        ))}
        <tr />
      </tbody>
    </table>
  );
};
export default Table;

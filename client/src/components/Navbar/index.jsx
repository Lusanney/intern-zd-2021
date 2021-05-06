import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#03363D' }}>
    <div className="container-fluid">

      <Link className="navbar-brand" to="/">
        <span className="me-3">
          <svg id="ember1569" className="ember-view ms-4" viewBox="0 0 26 26" style={{ width: 40 }}>
            <path fill="currentColor" d="M12 8.2v14.5H0zM12 3c0 3.3-2.7 6-6 6S0 6.3 0 3h12zm2 19.7c0-3.3 2.7-6 6-6s6 2.7 6 6H14zm0-5.2V3h12z" />
          </svg>
        </span>

        <span className="ml-3">Zendesk Intern</span>

      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Dashboard</Link>
          </li>
        </ul>

        <span className="navbar-text">
          <h5>Quang Van, Tran (Lusanney)</h5>
        </span>
      </div>
    </div>
  </nav>
);

export default React.memo(Navbar);

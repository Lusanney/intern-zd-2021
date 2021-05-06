import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="mt-5">
    <h1>404 - NOT FOUND</h1>
    <h2>The page you are looking for is not found</h2>
    <h2>
      Please go back to Dashboard with the link:

      <Link to="/" className="ms-3 btn btn-outline-primary" data-testid="go-dashboard">Dashboard</Link>
    </h2>
  </section>
);

export default NotFoundPage;

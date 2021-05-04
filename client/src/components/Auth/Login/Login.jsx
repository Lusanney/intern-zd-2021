import React, { useState } from 'react';

const Login = () => {
  const [subdomain, setSubdomain] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <div className="container">
        <h1>Hello and Welcome to Zendesk Intern project</h1>
        <h2> - Quang Van Tran - </h2>

        <form id="loginForm">
          <label htmlFor="inputDomain" className="form-label">Zendesk Domain</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="inputDomain" placeholder="your domain" value={subdomain} onChange={(e) => setSubdomain(e.target.value)} />
            <span className="input-group-text">.zendesk.com</span>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Login;

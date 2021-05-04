import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import TicketDetail from './pages/TicketDetail/TicketDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">

          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/ticket/:ticketId">
              <TicketDetail />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>

  );
}

export default App;

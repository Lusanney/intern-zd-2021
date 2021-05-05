import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import TicketDetail from './pages/TicketDetail/TicketDetail';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/Error/404';

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

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>

  );
}

export default React.memo(App);

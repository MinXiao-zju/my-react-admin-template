import React from 'react';
// import logo from './logo.svg';

// TODO: 以下两个 css 决定了真个应用的外观
import './App.css';
import './styles/sb-admin-2.min.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './common/components/PrivateRoute';
import AccountRoute from './common/components/AccountRoute';
import Login from './components/Account/Login';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Switch>
          <PrivateRoute path="/">
            <Admin />
          </PrivateRoute>
          <AccountRoute path="/login">
            <Login />
          </AccountRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

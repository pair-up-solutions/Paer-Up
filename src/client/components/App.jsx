/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import '../styles/styles.scss';
import Login from './Login';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
      </Switch>
    </div>
  );
};

export default App;

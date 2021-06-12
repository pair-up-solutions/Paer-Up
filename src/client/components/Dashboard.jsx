/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Logo from './Logo';
import ProfileContainer from './Profile/ProfileContainer';
import ConnectionContainer from './Connections/ConnectionContainer';
import MessageContainer from './Messages/MessageContainer';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        hello world
        <Link to="/messages">
          <button>Messages</button>
        </Link>
        <Link to="/connect">
          <button>CONNECT</button>
        </Link>
        <Link to="/userprofile">
          <button>My Profile</button>
        </Link>
      </div>
      <div className="container">
        <Switch>
          <Route path="/messages" render={(props) => <MessageContainer {...props} />} />
          <Route path="/connect" render={(props) => <ConnectionContainer {...props} />} />
          <Route path="/userprofile" render={(props) => <ProfileContainer {...props} />} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

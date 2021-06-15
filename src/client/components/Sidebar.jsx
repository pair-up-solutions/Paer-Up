import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Logo from './Logo';

const SideBar = (props) => {
  return (
    <nav>
      <Logo />
      <div className="sidebar">
        <Link to="/dashboard/userprofile">
          <button
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: '#f0e370' }}
            onClick={() => props.resetUser(props.currentUser)}
          >
            My Profile
          </button>
        </Link>
        <Link to="/dashboard/connect">
          <button
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: '#398d63' }}
          >
            Paer Up
          </button>
        </Link>
        <Link to="/dashboard/messages">
          <button
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: '#398d63' }}
          >
            Invitations
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;

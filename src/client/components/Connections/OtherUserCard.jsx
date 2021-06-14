import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const Container = (props) => {
  function paerUp() {
    const toSend = {
      loggedIn: props.currentUser,
      requested: props.userName,
      message: `${props.currentUser} has requested to paer up`,
    };
    fetch('/api/invitations', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(toSend),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{props.username}</h5>
          <p className="card-text">{props.userbio}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              paerUp();
            }}
          >
            Paer Up
          </button>
          <Link to="/userprofile">
            <button
              onClick={() => props.setRenderedPageUserName(props.username)}
              className="btn btn-info"
            >
              Show Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Show Profile should link to their page (set renderedUserPage to their username)

// Paer Up should send them an invite

export default Container;

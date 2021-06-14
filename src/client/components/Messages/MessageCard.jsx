import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const MessageCard = (props) => {
  //we need a card with the default message and header of who sent it
  //const sender = props.message;
  const messageArr = props.message.split(' ', 2);

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{messageArr[0]}</h5>
          <p className="card-text">{props.message}</p>
          <button className="btn btn-success">Paer</button>
          <button className="btn btn-danger">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;

import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const MessageCard = (props) => {
  //we need a card with the default message and header of who sent it
  //const sender = props.message;
  return (
    <div>
      <h1>{props.message} REQUESTED USER</h1>
    </div>
  );
};

export default MessageCard;

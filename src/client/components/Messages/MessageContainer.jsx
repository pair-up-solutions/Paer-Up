import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MessageCard from './MessageCard';
const MessageContainer = (props) => {
  // make a GET request call to the db for all messages to logged in user
  // const [messageArr, setMessageArr] = useState([]);

  // useEffect(() => {
  //   return fetch(`/api/messages/:${props.currentUserName}`, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setMessageArr(...data))
  //     .catch((err) => console.log(err));
  // });
  const messageArr = [
    'realNitinkumar wants to program with you!',
    'yomwold wants to program with you!',
    'WalkerMarsh hates your guts!',
  ];

  const messages = messageArr.map((x, idx) => <MessageCard message={x} key={idx} />);

  return (
    <div>
      <h1>Possible Paers</h1>
      {messages}
    </div>
  );
};
export default MessageContainer;

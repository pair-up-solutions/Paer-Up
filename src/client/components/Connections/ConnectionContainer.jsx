import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { ProgressPlugin } from 'webpack';
import OtherUserCard from './OtherUserCard';
import UserModal from './UserModal';

const ConnectionContainer = (props) => {
  // we will need to write a filter to not have logged in user data
  // make a card

  let allDataExceptUser = props.allUsersData.filter((x) => x.username !== props.userData.username);

  const cards = allDataExceptUser.map((user, idx) => {
    return (
      <OtherUserCard key={idx} user={user} props={props} currentUser={props.currentUserName} />
    );
  });

  return <div>{cards}</div>;
};

export default ConnectionContainer;

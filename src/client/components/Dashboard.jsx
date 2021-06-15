/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Logo from './Logo';
import ProfileContainer from './Profile/ProfileContainer';
import ConnectionContainer from './Connections/ConnectionContainer';
import MessageContainer from './Messages/MessageContainer';

const Dashboard = () => {
  const [currentUserName, setCurrentUserName] = useState(null); // the username of whos logged in
  const [allUsersData, setAllUsersData] = useState([]);
  const [renderedPageUserName, setRenderedPageUserName] = useState(null); // the username of the page we wanna see

  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    fetch(`/api/userprofile/${token}`)
      .then((data) => data.json())
      .then((items) => {
        setCurrentUserName(items.username);
        setRenderedPageUserName(items.username);
        console.log('one user', items);
      })
      .catch((err) => console.error(err));

    fetch('/api/connect')
      .then((data) => data.json())
      .then((items) => {
        console.log('connect', items);
        setAllUsersData(items);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {});
  // console.log('currentUserName', currentUserName);

  return (
    <div>
      <Sidebar
        renderedPageUserName={renderedPageUserName}
        setRenderedPageUserName={setRenderedPageUserName}
        currentUser={currentUserName}
        resetUser={setRenderedPageUserName}
        allUsersData={allUsersData}
        setAllUsersData={setAllUsersData}
      />
      <div className="container">
        <Switch>
          <Route
            path="/dashboard/messages"
            render={() => (
              <MessageContainer
                renderedPageUserName={renderedPageUserName}
                setRenderedPageUserName={setRenderedPageUserName}
                currentUser={currentUserName}
                resetUser={setRenderedPageUserName}
                allUsersData={allUsersData}
                setAllUsersData={setAllUsersData}
              />
            )}
          />
          <Route
            path="/dashboard/connect"
            render={() => (
              <ConnectionContainer
                renderedPageUserName={renderedPageUserName}
                setRenderedPageUserName={setRenderedPageUserName}
                currentUser={currentUserName}
                resetUser={setRenderedPageUserName}
                allUsersData={allUsersData}
                setAllUsersData={setAllUsersData}
              />
            )}
          />
          <Route
            path="/dashboard/userprofile"
            render={() => (
              <ProfileContainer
                renderedPageUserName={renderedPageUserName}
                setRenderedPageUserName={setRenderedPageUserName}
                currentUser={currentUserName}
                resetUser={setRenderedPageUserName}
                allUsersData={allUsersData}
                setAllUsersData={setAllUsersData}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

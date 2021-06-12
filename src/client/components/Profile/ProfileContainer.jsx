import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AccountDescriptionCard from './AccountDescriptionCard';
import PreviousProjectCard from './PreviousProjectCard';
import ProgrammingLanguageCard from './ProgrammingLanguageCard';

const ProfileContainer = () => {
  const [messages, setMessages] = useState(null);
  // this will be from a call to the DB

  const [userInfo, setUserInfo] = useState({ userName: '', userImg: '', userRepos: [] });
  // this will be from a POST req to github
  useEffect(() => {
    const
  }, []);
  // const [userBio, setUserBio] = useState('');
  // this will be from user input in a input

  return <div />;
};

export default ProfileContainer;

import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import OtherUserCard from './OtherUserCard';
import UserModal from './UserModal';

const ConnectionContainer = (props) => {
  // we will need to write a filter to not have logged in user data
  // make a card
  const allUsersData = [
    {
      profilePicURL: 'https://avatars.githubusercontent.com/u/39392074?v=4',
      username: 'realNitinKumar',
      bio: null,
      arrOfRepo: [
        { url: 'https://github.com/JefZheng/JobTable' },
        { url: 'https://github.com/JefZheng/qmk_firmware' },
      ],
      followers: 4,
      token: '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',
    },
    {
      profilePicURL: 'https://avatars.githubusercontent.com/u/39392074?v=4',
      username: 'yomwold',
      bio: null,
      arrOfRepo: [
        { url: 'https://github.com/JefZheng/JobTable' },
        { url: 'https://github.com/JefZheng/qmk_firmware' },
      ],
      followers: 4,
      token: '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',
    },
    {
      profilePicURL: 'https://avatars.githubusercontent.com/u/39392074?v=4',
      username: 'WalkerMarsh',
      bio: null,
      arrOfRepo: [
        { url: 'https://github.com/JefZheng/JobTable' },
        { url: 'https://github.com/JefZheng/qmk_firmware' },
      ],
      followers: 4,
      token: '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',
    },
    {
      profilePicURL: 'https://avatars.githubusercontent.com/u/39392074?v=4',
      username: 'robertcdu',
      bio: null,
      arrOfRepo: [
        { url: 'https://github.com/JefZheng/JobTable' },
        { url: 'https://github.com/JefZheng/qmk_firmware' },
      ],
      followers: 4,
      token: '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',
    },
    {
      profilePicURL: 'https://avatars.githubusercontent.com/u/39392074?v=4',
      username: 'victorluo00',
      bio: null,
      arrOfRepo: [
        { url: 'https://github.com/JefZheng/JobTable' },
        { url: 'https://github.com/JefZheng/qmk_firmware' },
      ],
      followers: 4,
      token: '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',
    },
  ];

  // let allDataExceptUser = props.allUsersData.filter((x) => x.username !== props.userData.username);

  const cards = allUsersData.map((user, idx) => {
    return (
      <OtherUserCard
        key={idx}
        user={user}
        props={props}
        currentUser={user.username}
        userBio="Programming alone is very lonely"
      />
    );
  });

  return (
    <div>
      <h1 style={{ color: '#398d63' }}>Find your perfect Paer</h1>
      {cards}
    </div>
  );
};

export default ConnectionContainer;

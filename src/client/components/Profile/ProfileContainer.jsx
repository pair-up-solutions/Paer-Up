import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AccountDescriptionCard from './AccountDescriptionCard';
import PreviousProjectCard from './PreviousProjectCard';
import ProgrammingLanguageCard from './ProgrammingLanguageCard';

const ProfileContainer = (props) => {
  // const [messages, setMessages] = useState(null);
  // this will be from a call to the DB

  // const [userInfo, setUserInfo] = useState({ userName: '', userImg: '', userRepos: [] });
  // const [userName, setUserName] = useState(null);
  // const [userImg, setUserImg] = useState(null);
  // const [userRepos, setUserRepos] = useState([]);
  // this will be from a POST req to github

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((data) => data.json())
  //     .then((items) => setUserName(items.userName))
  //     .catch((err) => console.error(err));
  // }, []);

  // async function getUserData() {
  //   try {
  //     const urlLink = `https://api.github.com/users/${userName}/repos`;
  //     const rawData = await fetch(urlLink);
  //     const jsonData = await rawData.json();
  //     setUserImg(jsonData[0].owner.avatar_url);
  //     const repoIds = [];
  //     for (let i = 0; i < jsonData.length; i += 1) {
  //       repoIds.push(jsonData[i].htmlUrl);
  //     }
  //     setUserRepos(repoIds);
  //     return;
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // }

  // const [userBio, setUserBio] = useState('');
  // this will be from user input in a input[]

  console.log('props', props);
  // const userData = props.allUsersData.filter((x) => x.username === props.renderedPageUserName);

  return (
    <div>
      <AccountDescriptionCard
        name="JefZheng"
        description="I like to code"
        profilePicUrl="https://avatars.githubusercontent.com/u/39392074?v=4"
      />
      <h1>Previous Projects</h1>
      <PreviousProjectCard
        arrOfRepos={[{ url: 'https://github.com/JefZheng/JobTable' }]}
        name="JefZheng/SnakeGame"
      />
      <PreviousProjectCard
        arrOfRepos={[{ url: 'https://github.com/JefZheng/JobTable' }]}
        name="JefZheng/Hackathon"
      />
      <PreviousProjectCard
        arrOfRepos={[{ url: 'https://github.com/JefZheng/JobTable' }]}
        name="JefZheng/JobTable"
      />
      <PreviousProjectCard
        arrOfRepos={[{ url: 'https://github.com/JefZheng/JobTable' }]}
        name="JefZheng/PaerUp"
      />
    </div>
  );
  // <ProgrammingLanguageCard />
};

export default ProfileContainer;

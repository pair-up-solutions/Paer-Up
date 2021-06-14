const { json, response, request } = require('express');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const { useParams } = require('react-router');

const fetch = require('node-fetch');

const { Console } = require('console');
const db = require('../models/dbmodels');

const apiController = {};

// OAuth log in
apiController.login = async (req, res, next) => {
  //   console.log("params", req.params.token);

  try {
    const { token } = req.params;
    // console.log("token",token)

    const tokenVar = `token ${token}`;
    // console.log("hi", tokenVar)
    // const options = {
    //   method: "GET",
    //   headers: {"Authorization": `token${token}`}
    // }

    let data = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: { Authorization: tokenVar },
    });

    data = await data.json();

    // console.log(data)

    const username = data.login;

    const val = await db.query(
      `SELECT users.username FROM users WHERE users.username = \'${username}\'`,
    );

    if (!val.rows.length) {
      const sqlQuery = 'INSERT INTO users VALUES(DEFAULT, $1, $2)';
      db.query(sqlQuery, [token, username]);
    }

    // fetch request to grab repos
    let repo = await fetch(data.repos_url);
    repo = await repo.json();
    // data.repos_url
    const realRepo = [];
    for (let i = 0; i < repo.length; i++) {
      const innerObj = {};
      innerObj.name = repo[i].name;
      innerObj.description = repo[i].description;
      innerObj.url = repo[i].html_url;
      realRepo.push(innerObj);
    }

    let followers = await fetch(data.followers_url);
    followers = await followers.json();

    const followerCount = followers.length;

    res.locals.userData = {
      profilePicURL: data.avatar_url,
      username: data.login,
      bio: data.bio,
      arrOfRepo: realRepo,
      followers: followerCount,
      token,
    };

    // const response = await db.query('SELECT token FROM users')
    // console.log("line 72 on apiController", response.rows);
    // const tokenArr = []
    // response.rows.forEach(el => {
    //   tokenArr.push(el.token)
    // })
    // console.log("tokenArr", tokenArr);

    // post to users table in db
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

// single user data
apiController.reqUserData = async (req, res, next) => {
  try {
    const { token } = req.params;
    // console.log("token",token)

    const tokenVar = `token ${token}`;
    // console.log("hi", tokenVar)
    // const options = {
    //   method: "GET",
    //   headers: {"Authorization": `token${token}`}
    // }

    let data = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: { Authorization: tokenVar },
    });

    data = await data.json();

    const username = data.login;

    // fetch request to grab repos
    let repo = await fetch(data.repos_url);
    repo = await repo.json();
    // data.repos_url
    const realRepo = [];
    for (let i = 0; i < repo.length; i++) {
      const innerObj = {};
      innerObj.name = repo[i].name;
      innerObj.description = repo[i].description;
      innerObj.url = repo[i].html_url;
      realRepo.push(innerObj);
    }

    let followers = await fetch(data.followers_url);
    followers = await followers.json();

    const followerCount = followers.length;

    res.locals.userData = {
      profilePicURL: data.avatar_url,
      username: data.login,
      bio: data.bio,
      arrOfRepo: realRepo,
      followers: followerCount,
      token,
    };

    // post to users table in db
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

apiController.reqAllUsersData = async (req, res, next) => {
  /*
  SELECT *
  FROM users
  */
  // SELECT token FROM users

  try {
    // grab all data from db - store in arr
    const response = await db.query('SELECT token FROM users');
    const tokenArr = [];
    response.rows.forEach((el) => {
      tokenArr.push(el.token);
    });

    // init res arr
    const resultArr = [];
    // iterate through tokenarr - make call
    for (let el = 0; el < tokenArr.length; el++) {
      const tokenVar = `token ${tokenArr[el]}`;
      let data = await fetch(`https://api.github.com/user`, {
        method: 'GET',
        headers: { Authorization: tokenVar },
      });
      data = await data.json();
      console.log('line 113', data);

      let repo = await fetch(data.repos_url);
      repo = await repo.json();
      console.log('repo line 118', repo);
      // data.repos_url
      const realRepo = [];
      for (let i = 0; i < repo.length; i++) {
        let innerObj = {};
        innerObj.name = repo[i].name;
        innerObj.description = repo[i].description;
        innerObj.url = repo[i].html_url;
        await realRepo.push(innerObj);
      }
      // console.log("realRepo", realRepo)

      let followers = await fetch(data.followers_url);
      followers = await followers.json();

      let followerCount = followers.length;
      // console.log("FC", followerCount)
      let userObj = {
        profilePicURL: data.avatar_url,
        username: data.login,
        bio: data.bio,
        arrOfRepo: realRepo,
        followers: followerCount,
        token: tokenArr[el],
      };
      // console.log("userObj", userObj)
      await resultArr.push(userObj);
      // console.log("145", resultArr);
    }
    console.log('line 147', resultArr);
    // pass res arr through res.locals

    res.locals.allUsers = resultArr;
    return next();
  } catch (err) {
    return next(err);
  }
};

// all users data
// apiController.reqAllUsersData = async (req, res, next) => {
//   /*
//   SELECT *
//   FROM users
//   */
//   // SELECT token FROM users

//   try {
//     // grab all data from db - store in arr
//     const response = await db.query('SELECT token FROM users');
//     const tokenArr = [];
//     response.rows.forEach((el) => {
//       tokenArr.push(el.token);
//     });

//     // init res arr
//     const resultArr = [];
//     // iterate through tokenarr - make call
//     for (let el = 0; el < tokenArr.length; el++) {
//       const tokenVar = `token ${tokenArr[el]}`;
//       let data = await fetch('https://api.github.com/user', {
//         method: 'GET',
//         headers: { Authorization: tokenVar },
//       });
//       data = await data.json();
//       // console.log("line 113", data)

//       let repo = await fetch(data.repos_url);
//       repo = await repo.json();
//       // console.log("repo line 118", repo)
//       // data.repos_url
//       const realRepo = [];
//       for (let i = 0; i < repo.length; i++) {
//         const innerObj = {};
//         innerObj.name = repo[i].name;
//         innerObj.description = repo[i].description;
//         innerObj.url = repo[i].html_url;
//         await realRepo.push(innerObj);
//       }
//       // console.log("realRepo", realRepo)

//       let followers = await fetch(data.followers_url);
//       followers = await followers.json();

//       const followerCount = followers.length;
//       // console.log("FC", followerCount)
//       const userObj = {
//         profilePicURL: data.avatar_url,
//         username: data.login,
//         bio: data.bio,
//         arrOfRepo: realRepo,
//         followers: followerCount,
//         token: tokenArr[el],
//       };
//       // console.log("userObj", userObj)
//       await resultArr.push(userObj);
//       // console.log("145", resultArr);
//     }
//     // console.log("line 147", resultArr);
//     // pass res arr through res.locals

//     res.locals.allUsers = resultArr;
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// };

// sending invitation
apiController.inviteUser = async (req, res, next) => {
  try {
    // console.log("req.body =>", req.params)
    // console.log("req.body =>", req.body)

    // query db - macth id for send and reciver
    // SELECT token FROM users WHERE username = 'realNitinKumar'

    let senderId = await db.query(`SELECT _id FROM users WHERE username=\'${req.body.loggedin}\'`);
    // console.log("line 219", senderId)
    senderId = await senderId.rows[0]._id;

    // console.log("line 219", senderId)
    let receiverId = await db.query(
      `SELECT _id FROM users WHERE username=\'${req.body.requested}\'`,
    );
    receiverId = await receiverId.rows[0]._id;

    // console.log("senderId", senderId)
    // console.log("receiverId", receiverId)
    const { message } = req.body;

    const sql = 'INSERT INTO invitations VALUES(DEFAULT, $1, $2, $3)';
    const queryArr = [message, senderId, receiverId];
    db.query(sql, queryArr);
    return next();
  } catch (err) {
    return next(err);
  }
};

// field1=value1 & field2=value2

module.exports = apiController;

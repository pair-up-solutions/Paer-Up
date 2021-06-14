const { json, response, request } = require('express');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const { useParams } = require('react-router');

const fetch = require('node-fetch');

const db = require('../models/dbmodels');

const apiController = {};

// OAuth log in
apiController.login = async (req, res, next) => {
  //   console.log("params", req.params.token);

  try {
    const token = req.params.token;
    console.log('token', token);

    const tokenVar = `token ${token}`;
    console.log('hi', tokenVar);
    // const options = {
    //   method: "GET",
    //   headers: {"Authorization": `token${token}`}
    // }

    let data = await fetch(`https://api.github.com/user`, {
      method: 'GET',
      headers: { Authorization: tokenVar },
    });

    data = await data.json();

    console.log(data);

    let username = data;

    // post to users table in db
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
  // query for adding user data
  // const sql = 'INSERT INTO users VALUES(DEFAULT, $1, $2)';
  // parameterize query - query(sql, array [token, username])
  // on sucessful login - redirect /dashboard
};

// single user data
apiController.reqUserData = (req, res, next) => {
  // MAKE REQUEST TO GITHUB TO GRAB ALL USER INFO
  // const sql = 'sql statement'
  /*
  SELECT *
  FROM users
  WHERE token = '${token}'
  */
  /*
  SELECT *
  FROM users
  WHERE _id = ${id}
  */
};

// all users data
apiController.reqAllUsersData = (req, res, next) => {
  /*
  SELECT *
  FROM users
  */
};

// sending invitation
apiController.inviteUser = (req, res, next) => {};

module.exports = apiController;

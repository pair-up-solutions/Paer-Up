const { json, response, request } = require('express');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const { useParams } = require('react-router');

const db = require('../models/dbmodels.js');

const apiController = {};

// OAuth log in 
apiController.logIn = (req, res, next) => {


// query for adding user data

// const sql = 'INSERT INTO users VALUES(DEFAULT, $1)';
// parameterize query - query(sql, array containing token)


// on sucessful login - redirect /dashboard
}

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

}

// all users data
apiController.reqAllUsersData = (req, res, next) => {
  
  /*
  SELECT *
  FROM users
  */
}


// sending invitation
apiController.inviteUser = (req, res, next) => {
  
}


module.exports = apiController;
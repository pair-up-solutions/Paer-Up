const { response, request } = require('express');
const express = require('express');
const path = require("path")
const apiController = require('../controllers/apicontroller');

const router = express.Router();

// handle OAUTH later
// router.get();

// request user data

router.get('/user/:token', apiController.login, (req, res) => {
  // console.log("line 14 on api.js",res.locals.userData)
  // res.status(200).json(res.locals.userData);
  // res.redirect(path.resolve(__dirname,'./dashboard'));
  // res.cookie("token", res.locals.userData.token)
  res.cookie('username', res.locals.userData.username)
  res.cookie('token', res.locals.userData.token)
  res.redirect('/dashboard');
});

router.get('/userprofile/:token', apiController.reqUserData, (req, res) => {
  console.log("line 21 =>", res.locals.userData)
  res.status(200).json(res.locals.userData);
});

router.get('/connect', apiController.reqAllUsersData, (req, res) => {
  console.log('line 19 on api.js', res.locals.allUsers);
  res.status(200).json(res.locals.allUsers);
});

router.post('/invitations', apiController.inviteUser, (req, res) =>
  res.status(200).json(res.locals.invitation),
);

module.exports = router;

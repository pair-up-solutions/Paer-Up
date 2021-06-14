const { response, request } = require('express');
const express = require('express');

const apiController = require('../controllers/apicontroller');

const router = express.Router();

// handle OAUTH later
// router.get();

// request user data

router.get('/user/:token', apiController.login, (req, res) => {
  // console.log("line 14 on api.js",res.locals.userData)
  res.status(200).json(res.locals.userData);
});

router.get('/connect', apiController.reqAllUsersData, (req, res) => {
  console.log('line 19 on api.js', res.locals.allUsers);
  res.status(200).json(res.locals.allUsers);
});

router.post('/invitations/:username&requested', apiController.inviteUser, (req, res) =>
  res.status(200).json(res.locals.invitation),
);

module.exports = router;

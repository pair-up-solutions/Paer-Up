const { response, request } = require('express');
const express = require('express');

const apiController = require('../controllers/apicontroller');

const router = express.Router();

// handle OAUTH later
// router.get();

// request user data

router.get('/user/:token', apiController.login, (req, res) =>
  res.status(200).json(res.locals.userData).redirect('/dashboard'),
);

router.get('/connect', apiController.reqAllUsersData, (req, res) =>
  res.status(200).json(res.locals.allUsersData),
);

router.get('/invitations', apiController.inviteUser, (req, res) =>
  res.status(200).json(res.locals.invitation),
);

module.exports = router;

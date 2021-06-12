const { response, request } = require('express');
const express = require('express');
const userController = require('../controllers/usercontroller');

const apiController = require('../controllers/apicontroller');

const router = express.Router();

router.get('/messages', userController.getMessages, (req, res) =>
  res.status(200).json(res.locals.messages),
);

router.post('/messages', userController.sendMessages, (req, res) => res.sendStatus(200));

module.exports = router;

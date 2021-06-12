const { response, request } = require('express');
const express = require('express');
const userController = require('../controllers/userController');

const apiController = require('../controllers/userController')

const router = express.Router();

router.get('/messages',
  userController.getMessages,
  (req, res) => res.status(200).json(res.locals.messages)
)

router.post('/messages',
  userController.sendMessages,
  (req, res) => res.sendStatus(200)
)

module.exports = router;
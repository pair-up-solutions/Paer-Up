const { json, response, request } = require('express');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

const db = require('../models/dbmodels');

const userController = {};

//
userController.getMessages = (req, res, next) => {};

userController.sendMessages = (req, res, next) => {};

userController.addFollower = (req, res, next) => {};

userController.getFollowers = (req, res, next) => {};

module.exports = userController;

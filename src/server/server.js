require('dotenv').config();
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const path = require('path');

// require routers

const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');

// oauth router
app.get('/api/auth', (req, res) => {
  console.log('hit oauth');
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user%20public_repo`,
  );
});
app.get('/api/oauth-callback', ({ query: { code } }, res) => {
//   console.log(res);
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };
//   console.log(body);
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      // eslint-disable-next-line no-console
    //   console.log('My token:', token);
      res.redirect(`/api/user/${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

/**
 * handling parsing request body
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * define route handlers
 */
app.use('/api', apiRouter);
app.use('/user', userRouter);

// route handler to respond with main app
app.use(express.static(path.join(__dirname, '../../dist')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// catch-all route handler for any requests to an unknown route

app.use((req, res) => res.sendStatus(404));

// default error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listens on port 3000
app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

module.exports = app;

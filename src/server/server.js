const express = require('express');

const app = express();
const path = require('path');

// require routers

const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');

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

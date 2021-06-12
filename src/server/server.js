const express = require('express');

const app = express();
const path = require('path');
const fetch = require('node-fetch');

app.use('/dist', express.static(path.join(__dirname, '../../dist')));

app.get('/', (req, res) => {
  try {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  } catch (err) {
    console.log(err);
    return err;
  }
});

app.use('*', (req, res) => res.status(404).send(`This is not the page you're looking for...`));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); // listens on port 3000 -> http://localhost:3000/

module.exports = app;

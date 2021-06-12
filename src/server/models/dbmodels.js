const { Pool } = require('pg');

const PG_URI =
  'postgres://qhakhewk:dHQiXjL0mSx2K74cWmbhbq5MEDyq8iCU@batyr.db.elephantsql.com/qhakhewk';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

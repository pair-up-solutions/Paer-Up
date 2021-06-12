SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE users (
    "_id" SERIAL PRIMARY KEY,
    "token" TEXT
);

CREATE TABLE invitations (
  "_id" SERIAL PRIMARY KEY,
  message TEXT,
  CONSTRAINT "senderID" FOREIGN KEY("_id") REFERENCES users("_id"),
  CONSTRAINT "recipientID" FOREIGN KEY("_id") REFERENCES users("_id")  
);
 

--  psql -d postgres://qhakhewk:dHQiXjL0mSx2K74cWmbhbq5MEDyq8iCU@batyr.db.elephantsql.com/qhakhewk -f paerup_postgres_db.sql
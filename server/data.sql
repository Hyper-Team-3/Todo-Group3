CREATE DATABASE todoapp;

CREATE TABLE todos (
  id VARCHAR(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);

INSERT INTO todos(id, user_email, title, progress, date) VALUES('0', 'alexander@test.com', 'First todo test', 10, 'Wed Mar 13 2024 11:51:13 GMT+0100 (Central European Standard Time)');


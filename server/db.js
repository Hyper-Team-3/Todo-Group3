const Pool = require("pg").Pool;
require("dotenv").config(); // sentitive info

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
});

module.exports = pool;

require('dotenv').config();
const dialect = 'postgres';

const {
  DB_USER: username,
  DB_PASS: password,
  DB_NAME: database,
  DB_HOST: host,
  DB_PORT: port,
} = process.env;

const credentials = {
  username,
  password,
  database,
  host,
  port,
  dialect,
};

module.exports = {
  local: credentials
};
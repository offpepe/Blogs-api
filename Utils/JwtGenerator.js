require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET;

module.exports = (displayName, email) => jwt.sign({ displayName, email }, SECRET, jwtConfig);
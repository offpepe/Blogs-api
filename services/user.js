require('dotenv').config();
const { User } = require('../models');
const JwtGenerator = require('../Utils/JwtGenerator');

const register = async (displayName, email, password, image) => {
    const emailExists = await User.findOne({ where: { email } });
    if (emailExists) throw new Error('User already registered');
    const userCreated = await User.create({ displayName, email, password, image });
    return JwtGenerator(userCreated.displayName, userCreated.email);
};

module.exports = {
    register,
};
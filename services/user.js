require('dotenv').config();
const { User } = require('../models');
const JwtGenerator = require('../Utils/JwtGenerator');

const register = async (displayName, email, password, image) => {
    const emailExists = await User.findOne({ where: { email } });
    if (emailExists) throw new Error('User already registered');
    const userCreated = await User.create({ displayName, email, password, image });
    return JwtGenerator(userCreated.displayName, userCreated.email);
};

const login = async (email, password) => {
    const userCreated = await User.findOne({ where: { email, password } });
    if (!userCreated) throw new Error('Invalid fields');
    return JwtGenerator(userCreated.displayName, userCreated.email);
};

const getUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

const getUserById = async (id) => {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error('User does not exist');
    return user;
};

const deleteUserByEmail = async (email) => {
    await User.destroy({ where: { email } });
};

module.exports = {
    register,
    login,
    getUsers,
    getUserById,
    deleteUserByEmail,
};
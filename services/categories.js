require('dotenv').config();
const { Category } = require('../models');

const createCategory = async (name) => {
    const created = await Category.create({ name });
    return created;
};

module.exports = {
    createCategory,
};
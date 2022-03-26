require('dotenv').config();
const { Category } = require('../models');

const createCategory = async (name) => {
    const created = await Category.create({ name });
    return created;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
};
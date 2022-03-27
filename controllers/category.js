const service = require('../services/categories');

const createCategory = async (req, res) => {
    const { name } = req.body;
    console.log(name);
    const result = await service.createCategory(name);
    return res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
    const categories = await service.getAllCategories();
    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAllCategories,
};
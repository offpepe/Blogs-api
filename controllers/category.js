const service = require('../services/categories');

const createCategory = async (req, res) => {
    const { name } = req.body;
    console.log(name);
    const result = await service.createCategory(name);
    return res.status(201).json(result);
};

module.exports = {
    createCategory,
};
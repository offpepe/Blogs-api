const service = require('../services/posts');

const createPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const email = req.tokenData;
        const result = await service.createPost(title, content, categoryIds, email);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPost,
};
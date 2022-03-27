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

const getAllPosts = async (_req, res) => {
    const posts = await service.getAllPosts();
    return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await service.getPostById(id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const email = req.tokenData;
        const updated = await service.updatePost(title, content, id, email);
        return res.status(200).json(updated);
    } catch (error) {
        if (error.message === '401') return res.status(401).json({ message: 'Unauthorized user' });
        return res.status(404).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const email = req.tokenData;
        await service.deletePost(id, email);
        return res.status(204).end();
    } catch (e) {
        if (e.message === '401') return res.status(401).json({ message: 'Unauthorized user' });
        return res.status(404).json({ message: e.message });
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    deletePost,
    updatePost,
};
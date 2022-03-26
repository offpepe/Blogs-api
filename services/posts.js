require('dotenv').config();
const { getAllCategories } = require('./categories');
const { User, Post, PostCategory } = require('../models');

const createPost = async (title, content, categoriesId, userEmail) => {
    const user = await User.findOne({ where: { email: userEmail } });
    const categories = await getAllCategories();
    const queriedCategory = categories
    .filter(({ id }) => categoriesId.some((cat) => cat === id));
    if (!queriedCategory) throw new Error('"categoryIds" not found');
    const created = await Post.create({ title, content, userId: user.id });
    const formattedCategories = categoriesId
    .map(((id) => ({ categoryId: id, postId: created.id })));
    await Promise.all(formattedCategories.map((postCat) => PostCategory.create(postCat)));
    return { 
        id: created.id,
        title: created.title,
        content: created.content,
        userId: created.userId,
     };
};

module.exports = {
    createPost,
};
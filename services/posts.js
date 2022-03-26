require('dotenv').config();
const { getAllCategories } = require('./categories');
const { User, Post, PostCategory, Category } = require('../models');

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

const getAllPosts = async () => {
    const posts = await Post.findAll({ include:
      [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
     });
  
    return posts;
  };

  const getPostById = async (id) => {
    const post = await Post.findOne({ 
        where: { id },
        include:
            [
              { model: User, as: 'user', attributes: { exclude: ['password'] } },
              { model: Category, as: 'categories' },
            ],
     });
    if (!post) throw new Error('Post does not exist');
    return post;
  };

  const updatePost = async (title, content, id) => {
      await Post.update(
        { title, content },
        { where: { id } },
        );
      const updated = await Post.findOne({ 
        where: { id },
        include:
            [
              { model: Category, as: 'categories' },
            ],
        attributes: { exclude: ['published', 'updated'] },
     });
      if (updated == null) throw new Error('Post does not exist');
      return updated;
  };

  const deletePost = async (id) => {
    await getPostById(id);
    await PostCategory.destroy({ where: { postId: id } });
    await Post.destroy({ where: { id } });
  };

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};
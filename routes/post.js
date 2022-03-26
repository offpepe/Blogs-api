const router = require('express').Router();
const { createPost, getAllPosts, getPostById, updatePost } = require('../controllers/post');
const { tokenValidation, CreatePostValidation } = require('../Validations');

router.post('/', tokenValidation, CreatePostValidation, createPost);
router.get('/', tokenValidation, getAllPosts);
router.get('/:id', tokenValidation, getPostById);
router.put('/:id', tokenValidation, updatePost);

module.exports = router;

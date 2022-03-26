const router = require('express').Router();
const { createPost, getAllPosts, getPostById, updatePost } = require('../controllers/post');
const { tokenValidation, CreatePostValidation, UpdatePostValidation } = require('../Validations');

router.post('/', tokenValidation, CreatePostValidation, createPost);
router.put('/:id', tokenValidation, UpdatePostValidation, updatePost);
router.get('/:id', tokenValidation, getPostById);
router.get('/', tokenValidation, getAllPosts);

module.exports = router;

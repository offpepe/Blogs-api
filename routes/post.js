const router = require('express').Router();
const { createPost, getAllPosts, getPostById } = require('../controllers/post');
const { tokenValidation, CreatePostValidation } = require('../Validations');

router.post('/', tokenValidation, CreatePostValidation, createPost);
router.get('/', tokenValidation, getAllPosts);
router.get('/:id', tokenValidation, getPostById);

module.exports = router;

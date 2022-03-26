const router = require('express').Router();
const { createPost } = require('../controllers/post');
const { tokenValidation, CreatePostValidation } = require('../Validations');

router.post('/', tokenValidation, CreatePostValidation, createPost);

module.exports = router;

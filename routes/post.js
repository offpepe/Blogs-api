const router = require('express').Router();
const { createPost } = require('../controllers/post');
const { tokenValidation } = require('../Validations');

router.post('/', tokenValidation, createPost);

module.exports = router;

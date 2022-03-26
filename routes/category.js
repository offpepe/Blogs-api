const router = require('express').Router();
const { createCategory } = require('../controllers/category');
const { tokenValidation, CreateCategoryValidation } = require('../Validations');

router.post('/', tokenValidation, CreateCategoryValidation, createCategory);

module.exports = router;
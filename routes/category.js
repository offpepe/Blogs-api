const router = require('express').Router();
const { createCategory, getAllCategories } = require('../controllers/category');
const { tokenValidation, CreateCategoryValidation } = require('../Validations');

router.post('/', tokenValidation, CreateCategoryValidation, createCategory);
router.get('/', tokenValidation, getAllCategories);

module.exports = router;
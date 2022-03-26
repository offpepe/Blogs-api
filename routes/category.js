const router = require('express').Router();
const { createCategory } = require('../controllers/category');
const { tokenValidation } = require('../Validations');

router.post('/', tokenValidation, createCategory);

module.exports = router;
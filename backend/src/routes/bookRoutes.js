const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bookController');

router.get('/', ctrl.getBooks);
router.post('/', ctrl.createBook);
router.put('/:id', ctrl.updateBook);

module.exports = router;
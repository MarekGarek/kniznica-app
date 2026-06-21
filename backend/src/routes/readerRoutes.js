const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/readerController');


router.get('/', ctrl.getReaders);
router.post('/', ctrl.createReader);
router.put('/:id', ctrl.updateReader);

module.exports = router;
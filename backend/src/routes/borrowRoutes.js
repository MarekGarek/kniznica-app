const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/borrowController');

router.get('/', ctrl.getBorrowsList);
router.post('/', ctrl.createBorrow);
router.put('/return', ctrl.returnBook);

module.exports = router;
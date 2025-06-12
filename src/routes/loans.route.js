const express = require('express');
const router = express.Router();
const loansController = require('../controllers/loans.controller');

router.get('/me/books', loansController.getMyBooks);

module.exports = router;
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');

router.get('/', booksController.getAllBooks);
router.post('/rent/:userId', booksController.rentBook);
router.post('/return/:bookId', booksController.returnBook);

module.exports = router;
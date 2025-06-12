const { 
  getAllBooks, 
  getBookById, 
  updateBookAvailability, 
  searchBooks 
} = require('../models/book.model');

exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.updateBookAvailability = updateBookAvailability;
exports.searchBooks = searchBooks;
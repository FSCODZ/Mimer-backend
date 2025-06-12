const createError = require('http-errors');
const bookService = require('../services/books.service');
const loanService = require('../services/loans.service');

exports.getAllBooks = (req, res, next) => {
  try {
    const { q } = req.query;
    let books;
    
    if (q) {
      books = bookService.searchBooks(q);
    } else {
      books = bookService.getAllBooks();
    }
    
    res.json(books);
  } catch (error) {
    next(error);
  }
};

exports.rentBook = (req, res, next) => {
  try {
    const { userId } = req.params;
    const { bookId } = req.body;
    
    if (!bookId) {
      throw createError.BadRequest('Book ID is required');
    }
    
    const book = bookService.getBookById(bookId);
    if (!book) {
      throw createError.NotFound('Book not found');
    }
    
    if (!book.available) {
      throw createError.Conflict('Book is already rented');
    }
    
    loanService.createLoan(userId, bookId);
    bookService.updateBookAvailability(bookId, false);
    
    res.status(201).json({ message: 'Book rented successfully' });
  } catch (error) {
    next(error);
  }
};

exports.returnBook = (req, res, next) => {
  try {
    const { bookId } = req.params;
    
    const loan = loanService.returnBook(parseInt(bookId));
    if (!loan) {
      throw createError.NotFound('Loan record not found');
    }
    
    bookService.updateBookAvailability(parseInt(bookId), true);
    
    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    next(error);
  }
};
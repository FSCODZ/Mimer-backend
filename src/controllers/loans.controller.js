const createError = require('http-errors');
const bookService = require('../services/books.service');
const loanService = require('../services/loans.service');

exports.getMyBooks = (req, res, next) => {
  try {
    const userId = parseInt(req.headers['x-user-id'], 10);
    if (!userId) {
      throw createError(400, 'User ID is required in the x-user-id header');
    }

    const loanRecords = loanService.getUserLoans(userId);

    const books = loanRecords.map(record => {
      const book = bookService.getBookById(record.bookId);
      return { ...book, loanDate: record.date };
    });

    res.json(books);
  } catch (error) {
    next(error);
  }
};

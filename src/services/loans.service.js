const { createLoan, returnBook, getUserLoans, isBookLoaned } = require('../models/loan.model');

exports.createLoan = createLoan;
exports.returnBook = returnBook;
exports.getUserLoans = getUserLoans;
exports.isBookLoaned = isBookLoaned;

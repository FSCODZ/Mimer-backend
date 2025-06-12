
const loans = []; 

const createError = require('http-errors');

function createLoan(userId, bookId) {
  const alreadyLoaned = loans.some(loan => loan.bookId === bookId);
  if (alreadyLoaned) {
    throw createError.Conflict('Book is already rented');
  }

  const loan = { userId, bookId, date: new Date() };
  loans.push(loan);
  return loan;
}

function getUserLoans(userId) {
  userId = parseInt(userId, 10);
  return loans.filter(loan => loan.userId === userId && !loan.returned);
}

function returnBook(bookId) {
  bookId = parseInt(bookId, 10);
  const loan = loans.find(loan => loan.bookId === bookId && !loan.returned);
  if (!loan) return null;
  loan.returned = true;
  loan.returnDate = new Date();
  return loan;
}

function isBookLoaned(bookId) {
  bookId = parseInt(bookId, 10);
  return loans.some(loan => loan.bookId === bookId && !loan.returned);
}

module.exports = {
  createLoan,
  returnBook,
  getUserLoans,
  isBookLoaned
};

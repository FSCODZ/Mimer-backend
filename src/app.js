const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books.route');
const loansRouter = require('./routes/loans.route');
const { notFound, errorHandler } = require('./middleware/error.middleware');

const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Mimer Library API',
    endpoints: {
      books: '/v1/books',
      rent: '/v1/books/rent/{userId}',
      myBooks: '/v1/users/me/books',
      return: '/v1/books/return/{bookId}'
    }
  });
});
app.use('/v1/books', booksRouter);
app.use('/v1/users', loansRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
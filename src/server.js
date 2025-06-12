const app = require('./app');
const { initBooks } = require('./models/book.model');

const PORT = process.env.PORT || 3000;

initBooks();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
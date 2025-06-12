const books = [];

const sampleBooks = [
  { id: 1, title: "1984", author: "George Orwell", isbn: "978-0452284234", available: true },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0061120084", available: true },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0743273565", available: true },
  { id: 4, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", isbn: "978-0439708180", available: true },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", isbn: "978-0316769174", available: true },
  { id: 6, title: "Pride and Prejudice", author: "Jane Austen", isbn: "978-0141439518", available: true },
  { id: 7, title: "The Lord of the Rings", author: "J.R.R. Tolkien", isbn: "978-0544003415", available: true },
  { id: 8, title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884", available: true },
  { id: 9, title: "Design Patterns", author: "Gang of Four", isbn: "978-0201633610", available: true },
  { id: 10, title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt", isbn: "978-0135957059", available: true }
];

function initBooks() {
  books.push(...sampleBooks);
}

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find(book => book.id === id);
}

function updateBookAvailability(id, available) {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index].available = available;
    return books[index];
  }
  return null;
}

function searchBooks(query) {
  const lowerQuery = query.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) || 
    book.author.toLowerCase().includes(lowerQuery)
  );
}

module.exports = {
  initBooks,
  getAllBooks,
  getBookById,
  updateBookAvailability,
  searchBooks
};
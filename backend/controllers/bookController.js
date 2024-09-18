const Book = require('../models/bookModel');

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, isbn } = req.body;
    const newBook = await Book.create({ title, author, genre, publicationDate, isbn });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Filter books
exports.getFilteredBooks = async (req, res) => {
  const { title, author, genre } = req.query;
  const filter = {};
  if (title) filter.title = title;
  if (author) filter.author = author;
  if (genre) filter.genre = genre;

  try {
    const books = await Book.findAll({ where: filter });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export books (CSV)
exports.exportBooks = async (req, res) => {
  const format = req.query.format || 'csv'; // CSV or JSON
  try {
    const books = await Book.findAll();

    if (format === 'json') {
      res.status(200).json(books);
    } else {
      let csvData = 'Title,Author,Genre,Publication Date,ISBN\n';
      books.forEach(book => {
        csvData += `${book.title},${book.author},${book.genre},${book.publicationDate},${book.isbn}\n`;
      });
      res.header('Content-Type', 'text/csv');
      res.attachment('books.csv');
      res.send(csvData);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require('express');
const { addBook, getFilteredBooks, exportBooks } = require('../controllers/bookController');
const router = express.Router();

router.post('/books', addBook);
router.get('/books', getFilteredBooks);
router.get('/books/export', exportBooks);

module.exports = router;

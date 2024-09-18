import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
  const [book, setBook] = useState({ title: '', author: '', genre: '', publicationDate: '', isbn: '' });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', book);
      alert('Book added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={book.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={book.author} onChange={handleChange} />
      <input name="genre" placeholder="Genre" value={book.genre} onChange={handleChange} />
      <input name="publicationDate" placeholder="Publication Date" value={book.publicationDate} onChange={handleChange} />
      <input name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;

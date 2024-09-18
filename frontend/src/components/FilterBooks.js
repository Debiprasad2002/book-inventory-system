import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterBooks = () => {
  const [filter, setFilter] = useState({ title: '', author: '', genre: '' });
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books', { params: filter });
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input name="title" placeholder="Title" value={filter.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={filter.author} onChange={handleChange} />
      <input name="genre" placeholder="Genre" value={filter.genre} onChange={handleChange} />
      <button onClick={handleFilter}>Filter</button>

      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} - {book.author} - {book.genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBooks;

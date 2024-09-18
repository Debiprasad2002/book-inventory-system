import React from 'react';
import axios from 'axios';

const ExportBooks = () => {
  const handleExport = async (format) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/books/export?format=${format}`, {
        responseType: 'blob',  // Ensure we get a file-like response
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `books.${format}`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => handleExport('csv')}>Export CSV</button>
      <button onClick={() => handleExport('json')}>Export JSON</button>
    </div>
  );
};

export default ExportBooks;

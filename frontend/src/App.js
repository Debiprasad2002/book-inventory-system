import React from 'react';
import AddBookForm from './components/AddBookForm';
import FilterBooks from './components/FilterBooks';
import ExportBooks from './components/ExportBooks';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Book Inventory System</h1>
      <AddBookForm />
      <FilterBooks />
      <ExportBooks />
    </div>
  );
};

export default App;

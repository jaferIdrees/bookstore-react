import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BooksList';
import Categories from './components/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;

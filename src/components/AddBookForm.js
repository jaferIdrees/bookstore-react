import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const [bookData, createBook] = useState({ title: '', author: '' });
  // const { titleEntry, authorEntry } = bookData;
  const newBook = (e) => (
    createBook({
      ...bookData,
      [e.target.name]: e.target.value,
    }));
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      ...bookData,
      id: uuidv4(),
    }));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input type="text" id="titleInput" required name="title" placeholder="Book title" onChange={newBook} />
      <input type="text" id="authorInput" required name="author" placeholder="Author" onChange={newBook} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBookForm;

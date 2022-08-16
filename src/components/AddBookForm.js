import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title: e.target.title.value,
      author: e.target.author.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input type="text" id="titleInput" required name="title" placeholder="Book title" />
      <input type="text" id="authorInput" required name="author" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBookForm;

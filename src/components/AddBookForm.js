import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const [bookData, createBook] = useState({});
  const { titleEntry, authorEntry } = bookData;
  const newBook = () => createBook((bookData) => {
    const book = {
      title: bookData.titleEntry,
      author: bookData.authorEntry,
      id: uuidv4(),
    };
    return book;
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(
      newBook() || {
        title: e.target.title.value,
        author: e.target.author.value,
        id: uuidv4(),
      },
    ));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input type="text" id="titleInput" required name="title" placeholder="Book title" value={titleEntry} />
      <input type="text" id="authorInput" required name="author" placeholder="Author" value={authorEntry} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBookForm;

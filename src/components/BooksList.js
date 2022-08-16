import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import Book from './Book';

function BookList() {
  const state = useSelector((state) => state.booksReducer);
  return (
    <>
      <div>
        {state.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
        {' '}

      </div>
      <AddBookForm />
    </>
  );
}

export default BookList;

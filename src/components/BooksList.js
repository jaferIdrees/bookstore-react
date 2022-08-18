import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import Book from './Book';

function BookList() {
  const state = useSelector((state) => state.booksReducer);
  useEffect(() => {
    document.querySelector('.BOOKS').className = 'BOOKS active';
    document.querySelector('.CATEGORIES').className = 'CATEGORIES';
  });
  return (
    <>
      <div className="bookList">
        {state.map((book) => (
          <Book
            id={book.id}
            key={uuidv4()}
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

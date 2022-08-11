import React from 'react';
import Book from './Book';

function BookList() {
  const bookArray = [{
    id: '1',
    title: 'test',
    author: 'jafer',
  }];
  return (
    bookArray.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
      />
    ))
  );
}

export default BookList;

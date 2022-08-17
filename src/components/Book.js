import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { title, author, id } = { ...props };
  const dispatch = useDispatch();
  const handleClick = () => dispatch(removeBook(id));
  return (
    <section className="book">
      <h2 className="bookTitle">{title}</h2>
      <h3 className="bookAuthor">{author}</h3>
      <button type="button" id={id} onClick={handleClick}>Remove</button>
    </section>
  );
}

export default Book;

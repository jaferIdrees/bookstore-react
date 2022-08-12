import React from 'react';

function Book(props) {
  const { title, author } = { ...props };
  return (
    <section className="book">
      <h2 className="bookTitle">{title}</h2>
      <h3 className="bookAuthor">{author}</h3>
      <button type="button">Remove</button>
    </section>
  );
}

export default Book;

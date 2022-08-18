import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, retrieveBooks } from '../redux/books/books';

function Book(props) {
  const { title, author, id } = { ...props };
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(removeBook(id));
    dispatch(retrieveBooks());
  };
  return (
    <section className="book">
      <div className="bookInfo">
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">{author}</h3>
        <div className="buttonContainer">
          <button type="button" className="removeButton bookButton" onClick="#">Comments</button>
          <button type="button" className="removeButton bookButton" id={id} onClick={handleClick}>Remove</button>
          <button type="button" className="bookButton" onClick="#">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-stat">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div>
            <button className="primary-button blueButton" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;

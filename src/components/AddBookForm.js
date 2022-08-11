import React from 'react';

function AddBookForm() {
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" id="titleInput" placeholder="Book title" />
      <input type="text" id="authorInput" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBookForm;

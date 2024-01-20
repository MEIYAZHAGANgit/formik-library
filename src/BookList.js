import React from 'react';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} by {book.author} - ISBN: {book.isbn}
            <button onClick={() => onDelete(book.isbn)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

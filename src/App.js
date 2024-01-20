import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const deleteAuthor = (name) => {
    setAuthors(authors.filter((author) => author.name !== name));
  };

  return (
    <div>
      <h1>Library Management System</h1>
      <div>
        <BookForm onSubmit={addBook} />
        <BookList books={books} onDelete={deleteBook} />
      </div>
      <div>
        <AuthorForm onSubmit={addAuthor} />
        <AuthorList authors={authors} onDelete={deleteAuthor} />
      </div>
    </div>
  );
};

export default App;

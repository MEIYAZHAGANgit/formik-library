import React from 'react';

const AuthorList = ({ authors, onDelete }) => {
  return (
    <div>
      <h2>Author List</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.name}>
            {author.name} (Born: {author.birthDate})
            <button onClick={() => onDelete(author.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;

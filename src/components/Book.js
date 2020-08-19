import React from 'react';

function Book(props) {
  const { key, book } = props;
  return (
    <tr key={`book-${key}`}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}

export default Book;

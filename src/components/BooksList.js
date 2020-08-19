import React from 'react';

function BooksList(props) {
  const { books } = props;
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {
        books.map(book => ( <Book key={book.id} book={book} /> ))
      }
    </table>
  );
}

export default BooksList;

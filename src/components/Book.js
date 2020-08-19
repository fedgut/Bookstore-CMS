import React from 'react';
import PropTypes from 'prop-types';

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

Book.propTypes = {
  key: PropTypes.number.isRequired,
  book: PropTypes.isRequired,
};

export default Book;

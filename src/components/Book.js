import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    book, handleClick, id,
  } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button id={`${id}`} type="button" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;

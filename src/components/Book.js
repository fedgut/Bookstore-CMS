import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleClick, id } = props;
  return (
    <li className="li-panel">
      <div className="book-data">
        <div>
          <div className="category">{book.category}</div>
          <div>{book.title}</div>
          <div>Generic Author</div>
        </div>
        <div>
          <span>Comment</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className="book-progress">
        <span className="current-chapter">CURRENT CHAPTER</span>
        <span className="chapter">Chapter 17</span>
        <button
          className="button-text"
          variant="primary"
          id={`${id}`}
          type="button"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleClick, id } = props;
  return (
    <li className="li-panel">
      <div className="book-data">
        <div>
          <div className="category">{book.category}</div>
          <div className="book-title">{book.title}</div>
          <div className="book-author">Generic Author</div>
        </div>
        <div className="book-options-container">
          <span className="book-options">Comment</span>
          <span className="vertical-line" />
          <button
            type="button"
            className="book-options remove"
            id={`${id}`}
            onClick={handleClick}
          >
            Remove
          </button>
          <span className="vertical-line" />
          <span className="book-options">Edit</span>
        </div>
      </div>
      <div className="place-holder-square">Place Holder Square</div>
      <div className="separation-bar" />
      <div className="book-progress">
        <span className="current-chapter">CURRENT CHAPTER</span>
        <span className="chapter">Chapter 17</span>
        <button className="button-text" variant="primary" type="button">
          UPDATE PROGRESS
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

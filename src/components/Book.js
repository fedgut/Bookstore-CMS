import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleClick, id } = props;
  return (
    <li className="list-group-item my-2 border d-flex  justify-content-between ">
      <div>
        <div>
          <div>{book.category}</div>
          <div>{book.title}</div>
          <div>Generic Author</div>
        </div>
        <div>
          <span>Comment</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className="d-flex flex-column mr-5">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 17</span>
        <button
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

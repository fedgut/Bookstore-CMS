import React from 'react';
import PropTypes from 'prop-types';

const SVG = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
    />
  </svg>
);

function Book(props) {
  const { key, book, handleClick } = props;
  return (
    <tr key={`book-${key}`}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={handleClick}>
          <SVG />
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  key: PropTypes.number.isRequired,
  book: PropTypes.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;

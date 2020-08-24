import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList(props) {
  const { books } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);

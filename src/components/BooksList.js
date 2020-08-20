import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { connect } from 'react-redux';

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
        books.map(book => (<Book key={book.id} book={book} />))
      }
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps)(BooksList);
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

class BooksList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { books } = this.props;
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
            <Book key={book.id} id={book.id} book={book} />
          ))}
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

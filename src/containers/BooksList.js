import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

class BooksList extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick(event) {
    const { id } = event.target;
    const { removeBook } = this.props;
    removeBook(Number(id));
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
            <Book
              key={book.id}
              id={book.id}
              book={book}
              handleClick={this.handleClick}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

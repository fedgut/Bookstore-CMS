import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { id } = event.target;
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    const { books, filters } = this.props;
    return (
      <div>
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
        <CategoryFilter />
      </div>
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
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

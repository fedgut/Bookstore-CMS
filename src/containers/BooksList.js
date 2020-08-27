import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.filterHelper = this.filterHelper.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    const { id } = event.target;
    const { removeBook } = this.props;
    removeBook(id);
  }

  handleChange(event) {
    const { changeFilter } = this.props;
    const category = event.target.value;
    changeFilter(category);
  }

  filterHelper(bookArray, filters) {
    let newArray = [];
    if (filters !== 'All') {
      newArray = bookArray.filter(book => book.category === filters);
    } else {
      newArray = [...bookArray];
    }
    return newArray.map(book => (
      <Book
        key={book.id}
        id={book.id}
        book={book}
        handleClick={this.handleClick}
      />
    ));
  }

  render() {
    const { books, filters } = this.props;
    return (
      <div>
        <nav className="panel-nav">
          <div className="bookstore-logo">Bookstore CMS</div>
          <div className="books-button">BOOKS</div>
          <CategoryFilter handleChange={this.handleChange} />
          <div className="user-icon">
            <i className="fa fa-user" />
          </div>
        </nav>
        <ul className="book-list">{this.filterHelper(books, filters)}</ul>

      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filters: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

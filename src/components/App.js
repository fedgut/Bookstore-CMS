import React from 'react';
import PropTypes from 'prop-types';
import BooksForm from './BookForm';
import BooksList from './BooksList';
import { connect } from 'react-redux';

function App(props) {
  const { books } = props;
  return (
    <div className="App">
      <BooksList books={books} />
      <BooksForm />
    </div>
  );
}

App.propTypes = {
  books: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
})

export default connect(mapStateToProps)(App);

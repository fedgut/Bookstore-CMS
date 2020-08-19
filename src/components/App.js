import React from 'react';
import BooksForm from './BookForm';
import BooksList from './BooksList';

function App(props) {
  const { books } = props;
  return (
    <div className="App">
      <BooksList books={books} />
      <BooksForm />
    </div>
  );
}

export default App;

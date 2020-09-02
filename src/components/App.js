import React from 'react';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App Bookstore-CMS">
      <div className="panel-bg">
        <BooksList />
        <BooksForm />
      </div>

    </div>
  );
}

export default App;

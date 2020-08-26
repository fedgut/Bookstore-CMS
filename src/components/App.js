import React from 'react';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App Bookstore-CMS">
      <div className="panel-bg">
        <nav className="panel-nav">
          <div className="bookstore-logo">Bookstore CMS</div>
          <div className="books-button">BOOKS</div>
          <div className="categories-button">CATEGORIES</div>
          <div className="user-icon">
            <i className="fa fa-spinner"></i>
          </div>
        </nav>
        <BooksList />
        <BooksForm />
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import books from './reducers/books';
import App from './components/App';
import './index.css';

const getRandomInt = () => Math.floor(Math.random() * Math.floor(214748364));

const initialBookState = [
  {
    id: getRandomInt(),
    title: 'Fahrenheit 451',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: '1984',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: 'Brave New World',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: 'Dr. Frankesntein',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: 'Dracula',
    category: 'Horror',
  },
  {
    id: getRandomInt(),
    title: 'Metodos Numericos Para Ingenieria',
    category: 'Learning',
  },
];

const store = createStore(books, initialBookState);

ReactDOM.render(
  <Provider store={store}>
    <App books={store.getState()} />
  </Provider>,
  document.getElementById('root'),
);

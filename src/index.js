import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import books from './reducers/books';
import App from './components/App';
import './index.css';

const getRandomInt = () => Math.floor(Math.random() * Math.floor(214748364));

const initialState = [
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

const rootReducer = combineReducers({ books });

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App books={initialState} />
  </Provider>,
  document.getElementById('root'),
);

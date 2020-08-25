import { combineReducers } from 'redux';
import books from './books';
import filters from './filters';

export default combineReducers({ books, filters });

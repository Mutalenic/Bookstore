import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';

import bookReducer from './books/books';



export default store;

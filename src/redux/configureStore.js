import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';

import bookReducer from './books/Books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;

import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './books/Books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

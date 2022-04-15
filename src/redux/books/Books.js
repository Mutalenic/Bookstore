import { API_URL, HEADERS } from '../../components/data/api';

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';

const initialState = [];

export const add = (book) => async (dispatch) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(book),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: ADD_BOOK, payload: book }),
      () => dispatch({ type: ADD_BOOK, payload: null }),
    );
};

export const del = (bookId) => async (dispatch) => {
  await fetch(`${API_URL}/${bookId}`, {
    method: 'DELETE',
    headers: HEADERS,
    body: JSON.stringify({ item_id: bookId }),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: REMOVE_BOOK, payload: bookId }),
      () => dispatch({ type: REMOVE_BOOK, payload: null }),
    );
};

export const getBooks = () => async (dispatch) => {
  await fetch(API_URL)
    .then((books) => books.json())
    .then(
      (data) => dispatch({ type: GET_BOOK, payload: data }),
      () => dispatch({ type: GET_BOOK, payload: [] }),
    );
};
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case GET_BOOK: {
      const bookList = [];
      Object.keys(action.payload).forEach((key) => {
        const book = action.payload[key][0];
        book.item_id = key;
        bookList.push(book);
      });
      return bookList;
    }

    default:
      return state;
  }
};

export default reducer;

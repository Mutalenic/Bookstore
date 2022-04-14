const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [{
  id: 1,
  genre: 'genre',
  title: 'book title',
  author: 'author',
  status: 'complete',
  currentChapter: 'Current chapter',
  chapterNumber: 'Chapter #number',
},
{
  id: 2,
  genre: 'genre',
  title: 'book title',
  author: 'author',
  status: 'complete',
  currentChapter: 'Current chapter',
  chapterNumber: 'Chapter #number',
},
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
export default reducer;

const CATEGORIES = 'bookstore/categories/CATEGORIES';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return 'Under Construction';
    default: return state;
  }
};

export const categoriesStatus = (payload) => ({
  type: CATEGORIES,
  payload,
});

export default categoriesReducer;

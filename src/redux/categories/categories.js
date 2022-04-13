// Actions
const CHECKSTATUS = 'bookstore/categories/checkStatus';

const initialState = [];

// Action Creators
export const checkStatus = (payload) => ({
  type: CHECKSTATUS,
  payload,
});

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default: return state;
  }
};

export default categoriesReducer;

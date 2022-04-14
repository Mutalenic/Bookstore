const CHECKSTATUS = 'bookstore/categories/checkStatus';

const initialState = [];

export const checkStatus = (payload) => ({
  type: CHECKSTATUS,
  payload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default: return state;
  }
};

export default categoriesReducer;

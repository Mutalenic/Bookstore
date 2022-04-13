import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesStatus } from '../redux/categories/categories';

const Categories = () => {
  const Categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(categoriesStatus())}>Check status</button>
      {Categories}
    </>

  );
};
export default Categories;

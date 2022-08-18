import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const state = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const checkCategoriesStatus = () => dispatch(checkStatus());
  useEffect(() => {
    document.querySelector('.BOOKS').className = 'BOOKS';
    document.querySelector('.CATEGORIES').className = 'CATEGORIES active';
  });
  return (
    <div>
      <h2>{state}</h2>
      {' '}

      <button type="button" onClick={checkCategoriesStatus}>Check status</button>
    </div>
  );
}

export default Categories;

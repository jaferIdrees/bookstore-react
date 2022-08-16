import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const state = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{state}</h2>
      {' '}

      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
}

export default Categories;

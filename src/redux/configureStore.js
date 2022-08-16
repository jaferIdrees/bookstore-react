import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const appReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const bookStore = configureStore({ reducer: appReducer });

export default bookStore;

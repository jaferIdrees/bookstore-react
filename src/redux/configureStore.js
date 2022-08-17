import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const initialState = {};
const middleware = [thunk];
const appReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const bookStore = configureStore({
  reducer: appReducer,
  initialState,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
});

export default bookStore;

import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { composeWithDevTools } from 'redux-devtools-extension';
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

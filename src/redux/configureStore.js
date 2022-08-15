import { combineReducers, configureStore } from 'redux';
import booksReducer from './books.reducer';
import categoriesReducer from './categories.reducer';

const appReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const bookStore = configureStore(appReducer);

export default bookStore;

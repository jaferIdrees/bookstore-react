import Book from '../../components/Book';

// Actions
const ADD = 'ADD';
const REMOVE = 'REMOVE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD: return [
      ...state,
      Book,
    ];
    case REMOVE: return state.filter((book) => (book.id !== action.book.id));
    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADD, book };
}

export function removeBook(book) {
  return { type: REMOVE, book };
}

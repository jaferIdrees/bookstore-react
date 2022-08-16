import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD = 'ADD';
const REMOVE = 'REMOVE';

const initialState = [
  {
    id: uuidv4(),
    title: 'You don\'t know JS yet',
    author: 'Kyle Simpson',
  },
  {
    id: uuidv4(),
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
  },
  {
    id: uuidv4(),
    title: 'Hands-On Design Patterns with Java',
    author: 'Dr. Edward Lavieri',
  },
];

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: uuidv4(),
          ...action.book,
        },
      ];
    case REMOVE: return [
      ...state.filter((book) => (book.id !== action.bookID)),
    ];
    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADD, book };
}

export function removeBook(bookID) {
  return { type: REMOVE, bookID };
}

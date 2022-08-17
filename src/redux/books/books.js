import BookService from '../../API_operations/bookService';

// Actions
const RETRIEVE_BOOKS = 'RETRIEVE_BOOKS';
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const ERROR = 'ERROR';

const initialState = [];

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case ADD:
    {
      return [...state];
    }
    case RETRIEVE_BOOKS:
    {
      const state = [];
      for (let i = 0; i < Object.keys(payload).length; i += 1) {
        state.push({
          ...[...payload[Object.keys(payload)[i]]][0],
          id: Object.keys(payload)[i],
        });
      }
      return state;
    }
    case REMOVE: return [
      ...state.filter((book) => (book.id !== action.bookID)),
    ];
    default: return state;
  }
}

export const addBook = (book) => async (dispatch) => {
  try {
    const res = await BookService.create({
      ...book,
      category: 'No Category',
    });
    dispatch({
      type: ADD,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await BookService.remove(id);
    dispatch({
      type: REMOVE,
      payload: { id },
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err },
    });
  }
};
export const retrieveBooks = () => async (dispatch) => {
  try {
    const res = await BookService.getAll();
    dispatch({
      type: RETRIEVE_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err },
    });
  }
};

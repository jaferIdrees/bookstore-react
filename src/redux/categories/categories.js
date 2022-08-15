// Actions
const CHECK_STATUS = 'CHECK_STATUS';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS: return 'Under construction';
    default: return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: CHECK_STATUS };
}

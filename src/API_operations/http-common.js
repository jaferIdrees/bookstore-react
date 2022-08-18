import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zkDe4doqq3NdykpFceb3/books',
  headers: {
    'Content-type': 'application/json',
  },
});

import http from './http-common';

const getAll = () => http.get('');

const create = (data) => http.post('', data);

const remove = (id) => http.delete(`/${id}`);

const BookService = {
  getAll,
  create,
  remove,
};
export default BookService;

import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000' });

/* Recupera a quantidade de livros da requisição */
const getQuantity = async (query = '', filter = '') => {
  const { data } = await api.get(`/books?${query}${filter}`);

  const pages = [];

  for (let index = 1; index <= (data.length / 10); index += 1) {
    pages.push(index);
  }

  return { itemsQuantity: data.length, pages };
};

export const getInitBooks = async () => {
  const { data } = await api.get('/books?_page=1&_limit=10');
  const { itemsQuantity, pages } = await getQuantity();

  return { data, itemsQuantity, pages };
};

export const getBooksForPage = async (query = '', filter = '', page = 1, limit = 10) => {
  console.log(`/books?${query}${filter}_page=${page}&_limit=${limit}`);
  const { data } = await api.get(`/books?${query}${filter}_page=${page}&_limit=${limit}`);

  return data;
};

export const getBooks = async (query = '', filter = '', page = 1, limit = 10) => {
  console.log(`/books?${query}${filter}_page=${page}&_limit=${limit}`);
  const { data } = await api.get(`/books?${query}${filter}_page=${page}&_limit=${limit}`);
  const { itemsQuantity, pages } = await getQuantity(query, filter);

  return { data, itemsQuantity, pages };
};

import axios from 'axios';

const URL = process.env.REACT_APP_URL_API || 'http://localhost:4000';

const api = axios.create({ baseURL: URL });

/* Recupera a quantidade de livros da requisição */
const getQuantity = async (query = '', filter = '') => {
  const { data } = await api.get(`/books?${query}${filter}`);

  const pages = [];

  for (let index = 1; index <= (data.length / 10); index += 1) {
    pages.push(index);
  }

  return { itemsQuantity: data.length, pages };
};

export const getBooksForPage = async (query = '', filter = '', page = 1, limit = 10) => {
  const { data } = await api.get(`/books?${query}${filter}_page=${page}&_limit=${limit}`);

  return data;
};

export const getBooks = async (query = '', filter = '', page = 1, limit = 10) => {
  const { data } = await api.get(`/books?${query}${filter}_page=${page}&_limit=${limit}`);
  const { itemsQuantity, pages } = await getQuantity(query, filter);

  return { data, itemsQuantity, pages };
};

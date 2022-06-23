import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000' });

const getQuantity = async () => {
  const { data } = await api.get('/books');

  return data.length;
};

const getBooks = async () => {
  const { data } = await api.get('/books?_page=1&_limit=10');
  const itemsQuantity = await getQuantity();

  const pages = [];

  for (let index = 1; index <= (itemsQuantity / 10); index += 1) {
    pages.push(index);
  }

  return { data, itemsQuantity, pages };
};

export default getBooks;

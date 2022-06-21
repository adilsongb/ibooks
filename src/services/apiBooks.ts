import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000' });

const getBooks = async () => {
  const { data } = await api.get('/books');

  return data;
};

export default getBooks;

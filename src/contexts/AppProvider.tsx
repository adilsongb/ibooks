import { createContext, useEffect, useMemo, useState } from 'react';
import { getBooksForPage, getBooks } from '../services/apiBooks';
import { propsProvider, AppContextType, DEFAULT_VALUE } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export function AppProvider({ children }: propsProvider) {
  const [pagesItems, setPagesItems] = useState<[] | number[]>([]);
  const [countTotalItems, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [book, setBook] = useState();
  const [viewDetail, setViewDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadTable, setLoadTable] = useState(false);

  const getApiBooks = async (query = search, fill = filter) => {
    setLoading(true);
    if (query) setSearch(query);
    if (fill) setFilter(fill);
    const { data, itemsQuantity, pages } = await getBooks(query, fill);

    setCount(itemsQuantity);
    setBooks(data);
    setPagesItems(pages);
    setLoading(false);
  };

  const getByFilter = async (fill = filter) => {
    setLoading(true);
    if (fill) setFilter(fill);
    const { data, itemsQuantity, pages } = await getBooks(search, fill);

    setCount(itemsQuantity);
    setBooks(data);
    setPagesItems(pages);
    setLoading(false);
  };

  const changePage = async (page: number) => {
    setLoadTable(true);
    const data = await getBooksForPage(search, filter, page);

    setBooks(data);
    setLoadTable(false);
  };

  const viewBookDetail = (indexBook: number) => {
    setBook(books[indexBook]);
    setViewDetail(true);
  };

  const closeBookDetail = () => {
    setBook(undefined);
    setViewDetail(false);
  };

  useEffect(() => {
    getApiBooks();
  }, []);

  const contextValues = useMemo(() => (
    {
      books,
      countTotalItems,
      pagesItems,
      changePage,
      getApiBooks,
      getByFilter,
      viewBookDetail,
      viewDetail,
      book,
      closeBookDetail,
      loading,
      loadTable,
    }
  ), [books, countTotalItems, pagesItems, viewDetail, loading, loadTable]);

  return (
    <AppContext.Provider value={contextValues}>
      { children }
    </AppContext.Provider>
  );
}

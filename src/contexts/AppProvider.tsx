import { createContext, useEffect, useMemo, useState } from 'react';
import { getInitBooks, getBooksForPage, getSearchBooks } from '../services/apiBooks';
import { propsProvider, AppContextType, DEFAULT_VALUE } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export function AppProvider({ children }: propsProvider) {
  const [pagesItems, setPagesItems] = useState<[] | number[]>([]);
  const [countTotalItems, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  const getAllBooks = async () => {
    const { data, itemsQuantity, pages } = await getInitBooks();

    setCount(itemsQuantity);
    setBooks(data);
    setPagesItems(pages);
  };

  const changePage = async (page: number) => {
    const data = await getBooksForPage(search, page);

    setBooks(data);
  };

  const SearchBooks = async (query: string) => {
    setSearch(query);
    const { data, itemsQuantity, pages } = await getSearchBooks(query);

    setCount(itemsQuantity);
    setBooks(data);
    setPagesItems(pages);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const contextValues = useMemo(() => (
    { books, countTotalItems, pagesItems, changePage, SearchBooks }
  ), [books, countTotalItems, pagesItems]);

  return (
    <AppContext.Provider value={contextValues}>
      { children }
    </AppContext.Provider>
  );
}

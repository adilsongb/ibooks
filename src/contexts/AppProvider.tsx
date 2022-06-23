import { createContext, useEffect, useMemo, useState } from 'react';
import { getInitBooks, getBooksForPage } from '../services/apiBooks';
import { propsProvider, AppContextType, DEFAULT_VALUE } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export function AppProvider({ children }: propsProvider) {
  const [pagesItems, setPagesItems] = useState<[] | number[]>([]);
  const [countTotalItems, setCount] = useState(0);
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const { data, itemsQuantity, pages } = await getInitBooks();

    setCount(itemsQuantity);
    setBooks(data);
    setPagesItems(pages);
  };

  const changePage = async (page: number) => {
    const data = await getBooksForPage(page);

    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const contextValues = useMemo(() => (
    { books, countTotalItems, pagesItems, changePage }
  ), [books, countTotalItems, pagesItems]);

  return (
    <AppContext.Provider value={contextValues}>
      { children }
    </AppContext.Provider>
  );
}

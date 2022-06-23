import React, { createContext, useEffect, useMemo, useState } from 'react';
import getBooks from '../services/apiBooks';
import { propsProvider, AppContextType, DEFAULT_VALUE } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export function AppProvider({ children }: propsProvider) {
  const [countTotalItems, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [pagesItems, setPagesItems] = useState<[] | number[]>([]);

  const getAllBooks = async () => {
    const { data, itemsQuantity, pages } = await getBooks();

    setCount(itemsQuantity);
    setBooks(data);
    setPagesItems(pages);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const contextValues = useMemo(() => (
    { books, countTotalItems, pagesItems }
  ), [books, countTotalItems, pagesItems]);

  return (
    <AppContext.Provider value={contextValues}>
      { children }
    </AppContext.Provider>
  );
}

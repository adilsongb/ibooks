import React, { createContext, useEffect, useMemo, useState } from 'react';
import getBooks from '../services/apiBooks';
import { propsProvider, AppContextType, DEFAULT_VALUE } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export function AppProvider({ children }: propsProvider) {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const data = await getBooks();

    setCount(data.length);
    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const contextValues = useMemo(() => ({ books, count }), [books, count]);

  return (
    <AppContext.Provider value={contextValues}>
      { children }
    </AppContext.Provider>
  );
}

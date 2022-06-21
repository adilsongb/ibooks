import React, { createContext, useEffect, useMemo, useState } from 'react';
import getBooks from '../services/apiBooks';
import { propsProvider } from './types';

export const AppContext = createContext({});

export function AppProvider({ children }: propsProvider) {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const data = await getBooks();

    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const contextValues = useMemo(() => ({ books }), [books]);

  return (
    <AppContext.Provider value={contextValues}>
      { children }
    </AppContext.Provider>
  );
}

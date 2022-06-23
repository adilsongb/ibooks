import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import TableBooks from './components/TableBooks';
import Filter from './components/Filter';
import PaginatedItems from './components/PaginatedItems';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <TableBooks />
      <PaginatedItems />
    </div>
  );
}

export default App;

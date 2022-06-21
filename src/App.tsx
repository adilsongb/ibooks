import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import TableBooks from './components/TableBooks';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <TableBooks />
    </div>
  );
}

export default App;

import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import TableBooks from './components/TableBooks';

function App() {
  return (
    <div className="App">
      <Header />
      <TableBooks />
    </div>
  );
}

export default App;

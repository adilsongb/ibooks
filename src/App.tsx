import { useContext } from 'react';
import { AppContext } from './contexts/AppProvider';
import Header from './components/Header';
import TableBooks from './components/TableBooks';
import Filter from './components/Filter';
import PaginatedItems from './components/PaginatedItems';
import './styles/main.scss';
import BookDetail from './components/BookDetail';

function App() {
  const { viewDetail } = useContext(AppContext);

  return (
    <main className="App">
      <Header />
      <section className="Content">
        <Filter />
        <TableBooks />
        <PaginatedItems />
      </section>

      { viewDetail ? <BookDetail /> : '' }
    </main>
  );
}

export default App;

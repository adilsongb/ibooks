import { useContext } from 'react';
import { AppContext } from './contexts/AppProvider';
import Header from './components/Header';
import TableBooks from './components/TableBooks';
import Filter from './components/Filter';
import PaginatedItems from './components/PaginatedItems';
import BookDetail from './components/BookDetail';
import Loading from './components/Loading';
import './styles/main.scss';

function App() {
  const { viewDetail, loading, books } = useContext(AppContext);

  if (loading) {
    return (
      <main className="App">
        <Header />
        <section className="ContentLoad">
          <Loading />
        </section>
      </main>
    );
  }

  /* Caso a requisição não retorne nenhum livro */
  if (books.length === 0) {
    return (
      <main className="App">
        <Header />
        <section className="ContentLoad">
          <h1>Nenhum resultado encontrado</h1>
        </section>
      </main>
    );
  }

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

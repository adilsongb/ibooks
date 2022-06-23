import './styles/main.scss';
import Header from './components/Header';
import TableBooks from './components/TableBooks';
import Filter from './components/Filter';
import PaginatedItems from './components/PaginatedItems';

function App() {
  return (
    <main className="App">
      <Header />
      <section className="Content">
        <Filter />
        <TableBooks />
        <PaginatedItems />
      </section>
    </main>
  );
}

export default App;

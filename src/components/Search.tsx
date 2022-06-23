import { useContext, useState, MouseEvent } from 'react';
import { AppContext } from '../contexts/AppProvider';

function Search() {
  const [query, setQuery] = useState('');
  const { SearchBooks } = useContext(AppContext);

  const submitSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    SearchBooks(`q=${query}`);
  };

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busque livros pelo título, autor, ou idioma"
      />
      <button type="submit" onClick={submitSearch}>
        Buscar
      </button>
    </form>
  );
}

export default Search;

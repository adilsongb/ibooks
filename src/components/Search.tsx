import { useContext, useState, MouseEvent } from 'react';
import { AppContext } from '../contexts/AppProvider';
import searchIcon from '../images/icons/search.svg';

function Search() {
  const [query, setQuery] = useState('');
  const { getApiBooks } = useContext(AppContext);

  const submitSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    getApiBooks(`q=${query}&`);
  };

  return (
    <form className="Search">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busque livros pelo título, autor, ou idioma"
      />
      <button type="submit" onClick={submitSearch}>
        <img src={searchIcon} alt="Search icon" />
      </button>
    </form>
  );
}

export default Search;

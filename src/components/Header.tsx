import BookIcon from '../images/icons/book.svg';
import Search from './Search';

function Header() {
  return (
    <header className="App-header">
      <section>
        <div className="logo">
          <img src={BookIcon} alt="Icon Book" />
          <h1>iBooks</h1>
        </div>

        <Search />
      </section>
    </header>
  );
}

export default Header;

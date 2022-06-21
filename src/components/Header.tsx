import React from 'react';
import BookIcon from '../images/icons/book.svg';

function Header() {
  return (
    <header className="App-header">
      <section>
        <div className="logo">
          <img src={BookIcon} alt="Icon Book" />
          <h1>iBooks</h1>
        </div>

        <form>
          <input type="text" name="" id="" placeholder="Busque livros pelo título, autor, ou idioma" />
          <button type="submit">
            Buscar
          </button>
        </form>
      </section>
    </header>
  );
}

export default Header;

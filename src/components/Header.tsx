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
          <input type="text" name="" id="" />
          <button type="submit">
            Buscar
          </button>
        </form>
      </section>

      <section>
        <form>
          <span>Filtrar ano da publicação</span>
          <input type="date" name="" id="" />
          <span>até</span>
          <input type="date" name="" id="" />
        </form>

        <span>0 resultados encontrados</span>
      </section>
    </header>
  );
}

export default Header;

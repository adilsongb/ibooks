import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <section>
        <h1>iBook</h1>

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

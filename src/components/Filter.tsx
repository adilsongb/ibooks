import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';

function Filter() {
  const { countTotalItems } = useContext(AppContext);

  return (
    <section className="Filter">
      <form>
        <span>Filtrar ano da publicação</span>
        <input type="number" name="" id="" />
        <span>até</span>
        <input type="number" name="" id="" />
      </form>

      <span>
        <span className="CountItems">{countTotalItems}</span>
        resultados encontrados
      </span>
    </section>
  );
}

export default Filter;

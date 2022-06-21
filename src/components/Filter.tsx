import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';

function Filter() {
  const { count } = useContext(AppContext);

  return (
    <section>
      <form>
        <span>Filtrar ano da publicação</span>
        <input type="date" name="" id="" />
        <span>até</span>
        <input type="date" name="" id="" />
      </form>

      <span>
        <span>{count}</span>
        resultados encontrados
      </span>
    </section>
  );
}

export default Filter;

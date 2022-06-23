import { useContext, useState, MouseEvent } from 'react';
import { AppContext } from '../contexts/AppProvider';

function Filter() {
  const [gte, setGte] = useState('0');
  const [lte, setLte] = useState('0');
  const { countTotalItems, getByFilter } = useContext(AppContext);

  const submitFilter = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(`${gte}-${lte}`);
    getByFilter(`year_gte=${gte}&year_lte=${lte}&`);
  };

  return (
    <section className="Filter">
      <form>
        <span>Filtrar ano da publicação</span>
        <input type="number" onChange={(e) => setGte(e.target.value)} />
        <span>até</span>
        <input type="number" onChange={(e) => setLte(e.target.value)} />
        <button type="submit" onClick={submitFilter}>
          Filtrar
        </button>
      </form>

      <span>
        <span className="CountItems">
          {countTotalItems}
        </span>
        resultados encontrados
      </span>
    </section>
  );
}

export default Filter;

import { useContext, useState, MouseEvent } from 'react';
import { AppContext } from '../contexts/AppProvider';
import filterIcon from '../images/icons/filter.svg';
import calendarIcon from '../images/icons/calendar.svg';

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
    <section className="FilterContainer">
      <form className="Filter">
        <img src={calendarIcon} alt="Calendar icon" width="20" />
        <span>Filtrar ano da publicação</span>
        <input
          type="number"
          onChange={(e) => setGte(e.target.value)}
          placeholder="1800"
        />
        <span>até</span>
        <input
          type="number"
          onChange={(e) => setLte(e.target.value)}
          placeholder="2022"
        />
        <button type="submit" onClick={submitFilter}>
          <img src={filterIcon} alt="Filter icon" width="20" />
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

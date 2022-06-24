import { useContext, useState, MouseEvent } from 'react';
import { AppContext } from '../contexts/AppProvider';
import filterIcon from '../images/icons/filter.svg';
import calendarIcon from '../images/icons/calendar.svg';

function Filter() {
  const [gte, setGte] = useState('');
  const [lte, setLte] = useState('');
  const { countTotalItems, getByFilter } = useContext(AppContext);

  const submitFilter = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
          data-testid="input-year"
        />
        <span>até</span>
        <input
          type="number"
          onChange={(e) => setLte(e.target.value)}
          placeholder="2022"
          data-testid="input-year"
        />
        <button
          type="submit"
          onClick={submitFilter}
          disabled={gte === '' || lte === ''}
          data-testid="filter-submit-btn"
        >
          <img src={filterIcon} alt="Filter icon" width="20" />
          Filtrar
        </button>
      </form>

      <span data-testid="quantity-info">
        {`${countTotalItems} resultados encontrados`}
      </span>
    </section>
  );
}

export default Filter;

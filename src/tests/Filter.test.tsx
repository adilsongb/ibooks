import { render, screen } from '@testing-library/react';
import Filter from '../components/Filter';

describe('Filter', () => {
  test('O filtro de ano é renderizado', () => {
    render(<Filter />);

    const inputsYear = screen.getAllByTestId('input-year');
    const submitBtn = screen.getByTestId('filter-submit-btn');

    expect(inputsYear).toHaveLength(2);
    expect(inputsYear[0]).toHaveProperty('type', 'number');
    expect(inputsYear[0]).toHaveProperty('placeholder', '1800');
    expect(inputsYear[1]).toHaveProperty('type', 'number');
    expect(inputsYear[1]).toHaveProperty('placeholder', '2022');
    expect(submitBtn).toHaveProperty('type', 'submit');
    expect(submitBtn).toHaveTextContent('Filtrar');
    expect(submitBtn).toBeDisabled();
  });

  test('É mostrado a quantidade de resultados', () => {
    render(<Filter />);

    const quantInfo = screen.getByTestId('quantity-info');
    expect(quantInfo).toHaveTextContent('0 resultados encontrados');
  });
});

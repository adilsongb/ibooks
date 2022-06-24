import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('A logo é renderizada', () => {
    render(<Header />);

    const iconLogo = screen.getByTestId('logo-icon');
    const titleLogo = screen.getByText(/ibooks/i);

    expect(iconLogo).toBeInTheDocument();
    expect(iconLogo).toHaveProperty('alt', 'Book icon');
    expect(titleLogo).toBeInTheDocument();
  });

  test('O componente de busca é renderizado', () => {
    render(<Header />);

    const searchForm = screen.getByTestId('search-form');
    const searchInput = screen.getByTestId('search-input');
    const searchBtn = screen.getByTestId('search-btn');
    const searchIcon = screen.getByTestId('search-icon');

    expect(searchForm).toBeInTheDocument();
    expect(searchForm).toHaveClass('Search');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveProperty('type', 'text');
    expect(searchInput)
      .toHaveProperty('placeholder', 'Busque livros pelo título, autor, ou idioma');

    expect(searchBtn).toBeInTheDocument();
    expect(searchBtn).toHaveProperty('type', 'submit');

    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveProperty('alt', 'Search icon');
  });
});

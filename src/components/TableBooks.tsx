/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import Loading from './Loading';

function TableBooks() {
  const { books, viewBookDetail, loadTable } = useContext(AppContext);

  if (loadTable) {
    return (
      <section className="ContainerDataTableLoad">
        <Loading />
      </section>
    );
  }

  return (
    <section className="ContainerDataTable">
      <table>
        <thead>
          <tr>
            <th>Livro</th>
            <th>Autor</th>
            <th>Idioma</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book, i) => (
              <tr key={i}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.language}</td>
                <td>{book.year}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => viewBookDetail(i)}
                  >
                    Detalhes
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default TableBooks;

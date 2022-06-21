/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';

function TableBooks() {
  const { books } = useContext(AppContext);

  return (
    <table border={1}>
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
              <td>{ book.author }</td>
              <td>{ book.language }</td>
              <td>{ book.year }</td>
              <td>
                <button type="button">
                  Detalhes
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TableBooks;

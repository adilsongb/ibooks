import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import closeIcon from '../images/icons/close.svg';
import linkIcon from '../images/icons/link.svg';

function BookDetail() {
  const { book, closeBookDetail } = useContext(AppContext);

  if (!book) {
    return (
      <section>
        <h2>Carregando...</h2>
      </section>
    );
  }

  return (
    <div className="DetailBackContainer">
      <div className="DetailContainer">
        <button type="button" onClick={() => closeBookDetail()}>
          <img src={closeIcon} alt="Close icon" />
        </button>

        <section className="ImgBook">
          <img src={book.imageLink} alt="Book art" />
        </section>

        <section className="InfoBook">
          <h2>{ book.title }</h2>
          <h3>{ book.author }</h3>
          <div>
            {`${book.country} - ${book.year}`}
          </div>
          <div>
            { book.language}
          </div>
          <div>
            {`${book.pages} Páginas`}
          </div>
          <a href={book.link} target="_blank" rel="noreferrer">
            <img src={linkIcon} alt="Link icon" />
            Mais detalhes
          </a>
        </section>
      </div>
    </div>
  );
}

export default BookDetail;

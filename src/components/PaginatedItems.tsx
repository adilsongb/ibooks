import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AppContext } from '../contexts/AppProvider';

function PaginatedItems() {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { countTotalItems } = useContext(AppContext);
  const itemsPerPage = 10;

  useEffect(() => {
    setPageCount(Math.ceil(countTotalItems / itemsPerPage));
  }, [itemOffset, countTotalItems]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % countTotalItems;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={undefined}
    />
  );
}

export default PaginatedItems;

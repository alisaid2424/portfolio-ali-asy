import ReactPaginate from 'react-paginate';

const Pagination = ({ itemsPerPage, setPage, data }) => {
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">>"
      onPageChange={(e) => setPage(e.selected + 1)}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="<<"
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center my-7 max-w-full"
      pageLinkClassName="btn-link flex items-center justify-center w-5 h-5 sm:w-[30px] sm:h-[30px] mx-2 sm:mx-3 rounded-full p-3  
      text-[10px] sm:text-xs"
      activeLinkClassName="active-btn"
      previousLinkClassName="font-light text-2xl sm:text-4xl text-bluu-light dark:text-bluu-dark"
      nextLinkClassName="font-light text-2xl sm:text-4xl text-bluu-light dark:text-bluu-dark"
    />
  );
};
export default Pagination;

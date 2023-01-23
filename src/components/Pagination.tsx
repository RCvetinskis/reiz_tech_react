import React from "react";
import ReactPaginate from "react-paginate";
import { IPagination } from "../types/types";

const Pagination: React.FC<IPagination> = ({
  total,
  limit,
  setStartingPage,
}) => {
  const pagesCount = Math.ceil(total / limit);

  const handlePageClick = (data: any) => {
    const startIndex = data.selected * limit;
    setStartingPage(startIndex);
  };

  return (
    <>
      <ReactPaginate
        pageCount={pagesCount}
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-end"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item "}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        activeLinkClassName={"active"}
      />
    </>
  );
};

export default Pagination;

import React from "react";
import ReactPaginate from "react-paginate";
import { fetchPages } from "../utilities/fetchCountries";
import { ICountry } from "../types/types";
import { switchPage } from "../utilities/switchPage";
type Props = {
  total: number;
  limit: number;
  countries: ICountry[];
  setCountries: (country: any) => void;
};
const Pagination: React.FC<Props> = ({
  total,
  limit,
  countries,
  setCountries,
}) => {
  const pagesCount = Math.ceil(total / limit);

  const handlePageClick = (data: any) => {
    let currentPage = data.selected + 1;

    // fetchPages(currentPage, limit, setCountries);
    //
    switchPage(currentPage, limit, countries, setCountries);
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

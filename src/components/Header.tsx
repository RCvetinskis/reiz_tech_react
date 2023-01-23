import React from "react";
import Sorting from "./Sorting";
import Filters from "./Filters";

const Header: React.FC = () => {
  return (
    <header className="mt-3 d-flex justify-content-between">
      <Sorting />
      <Filters />
    </header>
  );
};

export default Header;

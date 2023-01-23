import React from "react";
type ISort = {
  onSortChange: (sort: any) => void;
};
const Sort: React.FC<ISort> = ({ onSortChange }) => {
  return (
    <div>
      <label htmlFor="sortByName">Sort By Name:</label>
      <select
        className="form-select form-select-sm"
        onChange={(e: any) => onSortChange(e.target.value)}
      >
        <option value="">Choose here</option>
        <option value="ascending">Ascending </option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default Sort;

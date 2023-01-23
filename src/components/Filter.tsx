import React from "react";
import { IFilter } from "../types/types";

const Filters: React.FC<IFilter> = ({
  id,
  filterName,
  values,
  onFilterChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>{filterName}:</label>
      <select
        className="form-select form-select-sm"
        onChange={(e: any) => onFilterChange(e.target.value)}
        name={id}
        id={id}
      >
        <option value="">Choose here</option>
        {values.map((value, i) => (
          <option key={i}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;

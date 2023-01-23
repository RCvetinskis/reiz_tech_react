import React, { useContext } from "react";
import mainContext from "../context/mainContext";
import {
  fetchOceaniaRegion,
  fetchSmallerThanLt,
} from "../utilities/fetchCountries";
const Filters: React.FC = () => {
  const { countries, setCountries, setCountriesLength } =
    useContext(mainContext);

  // function filterOceania() {
  //   const filteredOceania = countries.filter((x) => x.region === "Oceania");
  //   console.log(filteredOceania.length);

  //   setCountries(filteredOceania);
  //   setCountriesLength(filterOceania.length);
  // }
  return (
    <div>
      <button
        className="custom-btn"
        onClick={() => fetchSmallerThanLt("Lithuania", setCountries)}
      >
        Smaller Lithuania
      </button>
      <button
        className="custom-btn"
        onClick={() =>
          fetchOceaniaRegion("oceania", setCountries, setCountriesLength)
        }
        // onClick={filterOceania}
      >
        {" "}
        Oceania region
      </button>
    </div>
  );
};

export default Filters;

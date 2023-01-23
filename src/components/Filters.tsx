import { reverse } from "lodash";
import React, { useContext } from "react";
import mainContext from "../context/mainContext";
import { fetchFilterRegion } from "../utilities/fetchCountries";
const Filters: React.FC = () => {
  const { countries, setFilteredCountries, setIsFiltered, setCountries } =
    useContext(mainContext);

  const regions = [
    { name: "Africa" },
    { name: "Asia" },
    { name: "Oceania" },
    { name: "Americas" },
    { name: "Europe" },
  ];

  function filterSmallest(country: string) {
    const selecetedCountry = countries.filter((x) => x.name === country);
    const filteredCountires = countries.filter(
      (x) => x.area < selecetedCountry[0].area
    );
    setFilteredCountries(filteredCountires);
    setIsFiltered(true);
  }

  return (
    <div>
      <label htmlFor="Smaller Countires than">Smaller than:</label>

      <select
        onChange={(e: any) => filterSmallest(e.target.value)}
        name="smallerCountries"
        id="smallerCountries"
      >
        {countries.map((country, i) => (
          <option key={i}>{country.name}</option>
        ))}
      </select>

      <label htmlFor="region">Choose a Region:</label>
      <select
        id="region"
        onChange={(e: any) =>
          fetchFilterRegion(e.target.value, setFilteredCountries, setIsFiltered)
        }
      >
        {regions.map((region, i) => (
          <option key={i} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>

      <button className="btn btn-dark" onClick={() => setIsFiltered(false)}>
        Reset
      </button>

      <div>
        <button
          className="btn btn-dark"
          onClick={() => setCountries(countries.sort())}
        >
          Ascending
        </button>
        <button className="btn btn-dark">Descending</button>
      </div>
    </div>
  );
};

export default Filters;

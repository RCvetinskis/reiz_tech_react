import React, { useContext, useState } from "react";
import Filter from "../components/Filter";
import Countries from "../components/Countries";
import Pagination from "../components/Pagination";
import Sort from "../components/Sort";
import { isNil } from "lodash";
import mainContext from "../context/mainContext";

const IndexPage: React.FC = () => {
  const { countries } = useContext(mainContext);
  const [startingPage, setStartingPage] = useState(0);
  const [areaFilter, setAreaFilter] = useState(null);
  const [regionFilter, setRegionFilter] = useState(null);
  const [sortByName, setSortByName] = useState(null);

  let filteredCountries = countries;

  if (areaFilter) {
    const country = countries.find((c) => c.name === areaFilter);
    if (country) {
      filteredCountries = filteredCountries.filter(
        (c) => c.area <= country.area
      );
    }
  }

  if (regionFilter) {
    filteredCountries = filteredCountries.filter(
      (c) => c.region === regionFilter
    );
  }

  if (sortByName === "descending") {
    filteredCountries = filteredCountries.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  } else if (sortByName === "ascending") {
    filteredCountries = filteredCountries.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  return (
    <div>
      {!isNil(countries) ? (
        <>
          <h1 className="text-center  text-light mt-1">Countries List</h1>
          <div className="mt-3  ">
            <Sort onSortChange={setSortByName} />
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <Filter
                id="region-filter"
                filterName="Filter by region"
                values={[...new Set(countries.map((c) => c.region))]}
                onFilterChange={setRegionFilter}
              />

              <Filter
                id="area-filter"
                filterName="Filter by area"
                values={countries.map((c) => c.name)}
                onFilterChange={setAreaFilter}
              />
            </div>
          </div>
          <table className="table table-dark mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Region </th>
                <th>
                  Area{" "}
                  <span>
                    {" "}
                    ( km <sup>2</sup>)
                  </span>{" "}
                </th>
              </tr>
            </thead>

            <Countries
              countries={filteredCountries.slice(
                startingPage,
                startingPage + 15
              )}
            />
          </table>

          <Pagination
            total={filteredCountries.length}
            limit={15}
            setStartingPage={setStartingPage}
          />
        </>
      ) : (
        <div className="text-danger">
          Can't get countries, something went wrong with api.
        </div>
      )}
    </div>
  );
};

export default IndexPage;

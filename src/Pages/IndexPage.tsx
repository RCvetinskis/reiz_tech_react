import React, { useContext, useState } from "react";
import Filters from "../components/Filters";

import Countries from "../components/Countries";
import Pagination from "../components/Pagination";
import { isNil } from "lodash";
import mainContext from "../context/mainContext";

const IndexPage: React.FC = () => {
  const { countries, isFiltered, filteredCountries } = useContext(mainContext);

  const [startingPage, setStartingPage] = useState(1);
  return (
    <div>
      {!isNil(countries) ? (
        <>
          <div className="mt-3 d-flex justify-content-between">
            <Filters />
          </div>
          <table className="table mt-3">
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
              countries={isFiltered ? filteredCountries : countries}
              startingPage={startingPage}
            />
          </table>
          <Pagination
            total={isFiltered ? filteredCountries.length : countries.length}
            limit={15}
            setStartingPage={setStartingPage}
          />
        </>
      ) : (
        <div className="error">
          Can't get countries, something went wrong with api.
        </div>
      )}
    </div>
  );
};

export default IndexPage;

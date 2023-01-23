import React, { useContext } from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { isNil } from "lodash";
import mainContext from "../context/mainContext";

const IndexPage: React.FC = () => {
  const { countries, setCountries, countriesLength } = useContext(mainContext);

  return (
    <div>
      {!isNil(countries) ? (
        <>
          <Header />
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

            <tbody>
              {countries.slice(0, 15).map((country, i) => (
                <tr key={i}>
                  <td className="td">{country.name}</td>
                  <td>{country.region}</td>
                  <td>{country.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            total={countriesLength}
            limit={15}
            countries={countries}
            setCountries={setCountries}
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

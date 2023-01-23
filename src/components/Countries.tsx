import React from "react";
import { ICountry } from "../types/types";
import { isUndefined } from "lodash";

type Props = {
  countries: ICountry[];
  startingPage: number;
};
const Countries: React.FC<Props> = ({ countries, startingPage }) => {
  return (
    <tbody>
      {countries.slice(startingPage, startingPage + 15).map((country, i) => (
        <tr key={i}>
          <td className="td">{country.name}</td>
          <td>{country.region}</td>
          <td>{country.area}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Countries;

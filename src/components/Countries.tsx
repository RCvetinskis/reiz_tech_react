import React from "react";
import { ICountry } from "../types/types";

type Props = {
  countries: ICountry[];
};
const Countries: React.FC<Props> = ({ countries }) => {
  return (
    <tbody>
      {countries.map((country, i) => (
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

import { createContext } from "react";
import { ICountry } from "../types/types";

type mainContextType = {
  countries: ICountry[] | [];
  setCountries: (country: any) => void;
  countriesLength: number;
  setCountriesLength: (countriesLength: number) => void;
};

const iMainContextState = {
  countries: [],
  setCountries: () => {},
  countriesLength: 250,
  setCountriesLength: () => {},
};
const mainContext = createContext<mainContextType>(iMainContextState);
export default mainContext;

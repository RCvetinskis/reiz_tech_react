import { createContext } from "react";
import { ICountry } from "../types/types";

type mainContextType = {
  countries: ICountry[] | [];
  setCountries: (country: any) => void;
  isFiltered: boolean;
  setIsFiltered: (filtered: boolean) => void;
  filteredCountries: ICountry[] | [];
  setFilteredCountries: (filtered: any) => void;
};

const iMainContextState = {
  countries: [],
  setCountries: () => {},
  isFiltered: false,
  setIsFiltered: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
};
const mainContext = createContext<mainContextType>(iMainContextState);
export default mainContext;

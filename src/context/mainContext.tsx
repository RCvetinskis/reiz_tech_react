import { createContext } from "react";
import { ICountry } from "../types/types";

type mainContextType = {
  countries: ICountry[] | [];
  setCountries: (country: any) => void;
};

const iMainContextState = {
  countries: [],
  setCountries: () => {},
};
const mainContext = createContext<mainContextType>(iMainContextState);
export default mainContext;

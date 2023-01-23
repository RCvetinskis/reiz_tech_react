import { ICountry } from "../types/types";

export const switchPage = (
  page: number,
  limit: number,
  countries: ICountry[],
  setCountries: any
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedDataForPagination = countries.slice(startIndex, endIndex);
  setCountries(slicedDataForPagination);
};

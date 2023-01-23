import axios from "axios";

const config = {
  method: "get",
  url: "https://restcountries.com/v2/all?fields=name,region,area",
};

export const fetchAllCountries = async (
  setCountries: any,
  setCountriesLength?: any
) => {
  await axios(config)
    .then((response) => {
      setCountriesLength(response.data.length);
      setCountries(response.data);
    })
    .catch((err) => console.log(err));
};

export const fetchPages = async (
  page: number,
  limit: number,
  setCountries: any
) => {
  await axios(config)
    .then((response) => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const slicedDataForPagination = response.data.slice(startIndex, endIndex);

      setCountries(slicedDataForPagination);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchOceaniaRegion = async (
  region: string,
  setCountries: any,
  setCountriesLength: any
) => {
  await axios
    .get(
      `https://restcountries.com/v3.1/region/${region}?fields=country,region,area
    `
    )
    .then((response) => {
      console.log(response.data);
      setCountries(response.data);
      setCountriesLength(response.data.length);
    })
    .catch((err) => console.log(err));
};

export const fetchSmallerThanLt = async (name: string, setCountries: any) => {
  await axios
    .get(
      `https://restcountries.com/v2/all?fields=${name},capital,currencies
    `
    )
    .then((response) => {
      console.log(response.data);
      //   setCountries(response.data);
    })
    .catch((err) => console.log(err));
};

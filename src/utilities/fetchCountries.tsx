import axios from "axios";
const config = {
  method: "get",
  url: "https://restcountries.com/v2/all?fields=name,region,area",
};

export const fetchAllCountries = async (setCountries: any) => {
  await axios(config)
    .then((response) => {
      setCountries(response.data);
    })
    .catch((err) => console.log(err));
};

export const fetchFilterRegion = async (
  region: string,
  setFilteredCountries: any,
  setIsFiltered: any
) => {
  await axios
    .get(
      `https://restcountries.com/v2/region/${region}?fields=name,region,area
    `
    )
    .then((response) => {
      setIsFiltered(true);
      setFilteredCountries(response.data);
    })
    .catch((err) => console.log(err));
};

import axios from "axios";
const config = {
  method: "get",
  url: "https://restcountries.com/v2/all?fields=name,region,area",
};

export const fetchAllCountries = async (
  setCountries: any,
  setIsLoading: any
) => {
  setIsLoading(true);
  await axios(config)
    .then((response) => {
      setCountries(response.data);
      setIsLoading(false);
    })
    .catch((err) => console.log(err));
};

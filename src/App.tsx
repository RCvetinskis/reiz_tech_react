import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import IndexPage from "./Pages/IndexPage";
import { fetchAllCountries } from "./utilities/fetchCountries";
import mainContext from "./context/mainContext";
const App: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [countriesLength, setCountriesLength] = useState(250);

  // finish filter and sort, either set initial state to get all countries, or fetch filtered and sorted countries from api
  useEffect(() => {
    fetchAllCountries(setCountries, setCountriesLength);
  }, []);

  return (
    <div className="App">
      <mainContext.Provider
        value={{ countries, setCountries, countriesLength, setCountriesLength }}
      >
        <Container>
          <IndexPage />
        </Container>
      </mainContext.Provider>
    </div>
  );
};

export default App;

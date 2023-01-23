import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import IndexPage from "./Pages/IndexPage";
import { fetchAllCountries } from "./utilities/fetchCountries";
import mainContext from "./context/mainContext";
const App: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    {
      !isFiltered && fetchAllCountries(setCountries);
    }
  }, []);

  return (
    <div className="App">
      <mainContext.Provider
        value={{
          countries,
          setCountries,
          isFiltered,
          setIsFiltered,
          filteredCountries,
          setFilteredCountries,
        }}
      >
        <Container>
          <IndexPage />
        </Container>
      </mainContext.Provider>
    </div>
  );
};

export default App;

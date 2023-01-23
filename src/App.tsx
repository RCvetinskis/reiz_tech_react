import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import IndexPage from "./Pages/IndexPage";
import { fetchAllCountries } from "./utilities/fetchCountries";
import mainContext from "./context/mainContext";
import Loading from "./components/Loading";
const App: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllCountries(setCountries, setIsLoading);
  }, []);

  return (
    <div className="App">
      <mainContext.Provider
        value={{
          countries,
          setCountries,
        }}
      >
        <Container>{isLoading ? <Loading /> : <IndexPage />}</Container>
      </mainContext.Provider>
    </div>
  );
};

export default App;

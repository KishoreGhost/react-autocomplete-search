import { useState } from "react";
import "./App.css";
import Data from "../resources/countryData.json";

function App() {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [optionVisible, setOptionVisible] = useState(false);

  const handleSearch = () => {
    const lowerCaseSearch = search.toLowerCase();

    const filteredCountries = Data.filter((country) =>
      country.name.toLowerCase().includes(lowerCaseSearch)
    );

    setFilteredCountries(filteredCountries);
  };

  const keyDown = (e) => {
    if (e.key === "Escape") {
      setOptionVisible(false);
    }
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          e.target.value ? setOptionVisible(true) : setOptionVisible(false);
        }}
        onInput={handleSearch}
        onKeyDown={keyDown}
      />
      <button>Search</button>
      {optionVisible && (
        <div>
          {filteredCountries.map((data) => (
            <div key={data.id}>{data.name}</div>
          ))}
        </div>
      )}
    </>
  );
}
export default App;

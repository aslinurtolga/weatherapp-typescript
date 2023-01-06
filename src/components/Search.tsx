import React, { ChangeEvent, useState } from "react";
import { optionCityType } from "../types";

const Search = (): JSX.Element => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);

  const getSearch = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    getSearch(value);
  };
  return (
    <div>
      <section>
        <h1>Weather App</h1>
        <p>Enter a place</p>
        <div>
          <input type="text" value={term} onChange={handleChange} />
          <ul>
            {options.length > 1 &&
              options?.map((optionCity: optionCityType, index: number) => (
                <li key={index}>
                  <button>
                    {optionCity.name} {optionCity.country}
                  </button>
                </li>
              ))}
          </ul>

          <button>Search</button>
        </div>
      </section>
    </div>
  );
};

export default Search;

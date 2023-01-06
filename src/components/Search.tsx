import React, { ChangeEvent, useState, useEffect } from "react";
import { optionCityType } from "../types";

const Search = (): JSX.Element => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionCityType | null>();

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
    if (value === "") return;
    getSearch(value);
  };

  const handleSubmit = () => {
    if (!city) return;
    getWeatherData(city);
  };

  const getWeatherData = (city: optionCityType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

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
                  <button onClick={() => setCity(optionCity)}>
                    {optionCity.name} {optionCity.country}
                  </button>
                </li>
              ))}
          </ul>

          <button onClick={handleSubmit}>Search</button>
        </div>
      </section>
    </div>
  );
};

export default Search;

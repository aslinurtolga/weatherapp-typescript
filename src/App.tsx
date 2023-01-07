import Search from "./components/Search";
import useForecast from "./hooks/useForecast";

const App = () => {
  const { term, options, handleChange, handleSubmit, setCity } = useForecast();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-500  to-gray-300 h-[100vh] w-full">
      Intersecting Codes | Weather App
      <Search
        term={term}
        options={options}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setCity={setCity}
      />
    </div>
  );
};

export default App;

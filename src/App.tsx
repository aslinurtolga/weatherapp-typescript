import Search from "./components/Search";

const App = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-500  to-gray-300 h-[100vh] w-full">
      Intersecting Codes | Weather App
      <Search/>
    </div>
  );
};

export default App;

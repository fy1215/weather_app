import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const API_KEY = "APIkey";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto">
        <Header />
        <SearchForm onSearch={handleSearch} />
        {weather && <Weather data={weather} />}
      </div>
    </div>
  );
}

export default App;

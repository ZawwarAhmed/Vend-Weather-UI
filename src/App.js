import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import Navbar from "./components/common/Navbar/Navbar";
import { title } from "./data/appData";
import {
  city,
  day,
  currentWeather,
  currentTemperature,
} from "./data/currentWeatherData";
import { days, dailyWeather, dailyTemperature } from "./data/dailyWeatherData";
import { citiesResponse } from "./data/citiesData";
import "./App.css";

function App() {
  const [citiesData, setCitiesData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setCitiesData(await citiesResponse());
    }
    fetchData();
  }, []);

  const filterCityOptions = (text) => {
    if (text.length >= 4) {
      setOptions(
        citiesData.filter((option) =>
          option.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setOptions(citiesData.filter(city => city.length < 4));
    }
  };
  
  return (
    <div className="App">
      <Navbar
        title={title}
        options={options}
        filterCityOptions={filterCityOptions}
      />
      <CurrentWeather
        city={city}
        day={day}
        currentWeather={currentWeather}
        currentTemperature={currentTemperature}
      />
      <DailyWeather
        days={days}
        dailyWeather={dailyWeather}
        dailyTemperature={dailyTemperature}
      />
    </div>
  );
}

export default App;

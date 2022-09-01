import { useLayoutEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import Navbar from "./components/common/Navbar/Navbar";
import { title } from "./data/appData";
import { currentWeatherResponse } from "./data/currentWeatherData";
import { days, dailyWeather, dailyTemperature, dailyWeatherResponse } from "./data/dailyWeatherData";
import { citiesResponse } from "./data/citiesData";
import "./App.css";

function App() {
  const [citiesData, setCitiesData] = useState([]);
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [dailyWeatherData, setDailyWeatherData] = useState([]);
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState(
    localStorage.getItem("city") || "Karachi"
  );

  useLayoutEffect(() => {
    async function fetchData() {
      setCitiesData(await citiesResponse());
      setCurrentWeatherData(await currentWeatherResponse(option));
      setDailyWeatherData(await dailyWeatherResponse(option))
    }
    fetchData();
  }, [option]);

  const filterCityOptions = (text) => {
    if (text.length >= 4) {
      setOptions(
        citiesData.filter((option) =>
          option.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setOptions(citiesData.filter((city) => city.length < 4));
    }
  };

  return (
    <div className="App">
      <Navbar
        title={title}
        options={options}
        filterCityOptions={filterCityOptions}
        setOption={setOption}
      />
      <CurrentWeather
        city={option}
        day={currentWeatherData.day}
        date={currentWeatherData.date}
        time={currentWeatherData.time}
        currentWeather={currentWeatherData.weather}
        currentTemperature={currentWeatherData.temperature}
        feelsLike={currentWeatherData.feelsLike}
        humidity={currentWeatherData.humidity}
        weatherIcon={currentWeatherData.weatherIcon}
      />
      <DailyWeather
        days={dailyWeatherData.map(item => item.day)}
        dailyWeather={dailyWeatherData.map(item => item.weather)}
        weatherIcon={dailyWeatherData.map(item => item.weatherIcon)}
        dailyTemperature={dailyWeatherData.map(item => item.temperature)}
        time={dailyWeatherData.map(item => item.time)}
      />
    </div>
  );
}

export default App;

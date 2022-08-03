import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import Navbar from "./components/common/Navbar/Navbar";
import { title } from "./data/appData";
import { citiesData } from "./data/citiesData";
import { city, day, currentWeather, currentTemperature } from "./data/currentWeatherData";
import { days, dailyWeather, dailyTemperature } from "./data/dailyWeatherData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar title={title} data={citiesData} />
      <CurrentWeather
        city={city}
        day={day}
        currentWeather={currentWeather}
        currentTemperature={currentTemperature}
      />
      <DailyWeather days={days} dailyWeather={dailyWeather} dailyTemperature={dailyTemperature} />
    </div>
  );
}

export default App;

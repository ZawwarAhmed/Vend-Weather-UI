import React from "react";
import { days, weather, temperature } from "../../assets/data/weatherData";
import "./DailyWeather.css"

function DailyWeather() {
  return (
    <div className="daily-weather">
      {days.map((day, i) => (
        <div className="day-weather">
          <h2>{day}</h2>
          <h4>{weather[i]}</h4>
          <h3>{temperature[i]}°C</h3>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;

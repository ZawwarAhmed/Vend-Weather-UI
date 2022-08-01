import React from "react";
import "./DailyWeather.css"

function DailyWeather() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weather = [
    "Rainy",
    "Rainy",
    "ThunderStorm",
    "Cloudy",
    "Sunny",
    "Rainy",
    "Rainy",
  ];
  const temperature = [23, 24, 30, 31, 32, 33, 34, 35];
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

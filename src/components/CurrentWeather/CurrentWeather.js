import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({
  city,
  day,
  date,
  time,
  currentWeather,
  currentTemperature,
  feelsLike,
  humidity,
  weatherIcon
}) {
  const twelveHourFormat = new Date(`${date} ${time}`).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
  return (
    <div className="current-weather">
      <div className="location">
        <h2 className="city">{city}</h2>
        <h2 className="day">
          {day}, {twelveHourFormat}
        </h2>
        <h2 className="weather">{currentWeather}</h2>
        <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="" />
      </div>
      <div className="weather-figures">
        <h1 className="temperature">{currentTemperature} °C</h1>
        <h3 className="feels-like">Feels Like {feelsLike} °C</h3>
        <h3 className="humidity">Humidity {humidity}</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;

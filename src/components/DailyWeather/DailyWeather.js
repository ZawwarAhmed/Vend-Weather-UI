import React from "react";
import "./DailyWeather.css"

function DailyWeather({ days, dailyWeather, dailyTemperature }) {
  return (
    <div className="daily-weather">
      {days.map((day, i) => (
        <div key={i} className="day-weather">
          <h2>{day}</h2>
          <h4>{dailyWeather[i]}</h4>
          <h3>{dailyTemperature[i]}°C</h3>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;

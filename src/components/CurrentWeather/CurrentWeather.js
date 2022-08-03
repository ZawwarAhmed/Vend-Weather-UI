import React from 'react'
import "./CurrentWeather.css"

function CurrentWeather({city, day, currentWeather, currentTemperature}) {
  return (
    <div className='current-weather'>
        <div className="location">
            <h2 className="city">
                {city}
            </h2>
            <h2 className="day">
                {day}
            </h2>
            <h2 className="weather">{currentWeather}</h2>
        </div>

        <h1 className="temperature">{currentTemperature}</h1>
    </div>
  )
}

export default CurrentWeather
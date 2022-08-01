import React from 'react'
import "./CurrentWeather.css"

function CurrentWeather() {
  return (
    <div className='current-weather'>
        <div className="location">
            <h2 className="city">
                Karachi
            </h2>
            <h2 className="day">
                Friday
            </h2>
            <h2 className="weather">Rainy</h2>
        </div>

        <h1 className="temperature">31°C</h1>
    </div>
  )
}

export default CurrentWeather
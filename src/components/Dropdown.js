import React, { useState } from "react";
import "../stylesheets/Dropdown.css";

function Dropdown() {
  const citiesData = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar"];
  const [cities, setCities] = useState(citiesData);
  const [city, setCity] = useState(cities[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(() => !isDropdownOpen);
  };

  const handleCityChange = (city) => {
    setCity(city);
  };

  const filterCityOptions = (text) => {
    setCities(
      citiesData.filter((city) =>
        city.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="city-dropdown" name="city-dropdown">
        <input
          className="select"
          onClick={toggleDropdown}
          onChange={(e) => filterCityOptions(e.target.value)}
          placeholder="Search for a city..."
        />
        {isDropdownOpen && (
          <div className="options">
            {cities.map((city, i) => (
              <span
                key={i}
                className="option"
                value={city}
                onClick={() => handleCityChange(city)}
              >
                {city}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

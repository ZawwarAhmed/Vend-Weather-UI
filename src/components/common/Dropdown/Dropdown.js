import React, { useState, useRef } from "react";
import "./Dropdown.css";

function Dropdown({ options, filterCityOptions }) {
  const [option, setOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(() => true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(() => false);
  };
  
  const handleCityChange = (option) => {
    setOption(option);
  };

  return (
    <div onFocus={openDropdown} onBlur={closeDropdown}>
      <div className="option-dropdown" name="option-dropdown">
        <input
          className="select"
          
          onChange={(e) => filterCityOptions(e.target.value)}
          placeholder="Search for a city..."
        />
        {isDropdownOpen && (
          <div className="options">
            {options.map((option, i) => (
              <span
                key={i}
                className="option"
                value={option}
                onMouseDown={() => handleCityChange(option)}
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

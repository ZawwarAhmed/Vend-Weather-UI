import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ data }) {
  const [options, setOptions] = useState(data);
  const [setOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(() => !isDropdownOpen);
  };

  const handleCityChange = (option) => {
    setOption(option);
  };

  const filterCityOptions = (text) => {
    setOptions(
      options.filter((option) =>
        option.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="option-dropdown" name="option-dropdown">
        <input
          className="select"
          onClick={toggleDropdown}
          onChange={(e) => filterCityOptions(e.target.value)}
          placeholder="Search for a option..."
        />
        {isDropdownOpen && (
          <div className="options">
            {options.map((option, i) => (
              <span
                key={i}
                className="option"
                value={option}
                onClick={() => handleCityChange(option)}
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

import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ options, filterOptions, setOption, dropdownFor }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(() => true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(() => false);
  };

  const handleChange = (option) => {
    localStorage.setItem(dropdownFor, option);
    document.querySelector(".select").value = "";
    setOption(option);
  };

  return (
    <div onFocus={openDropdown} onBlur={closeDropdown}>
      <div className="option-dropdown" name="option-dropdown">
        <input
          className="select"
          onChange={(e) => filterOptions(e.target.value)}
          placeholder={`Search for a ${dropdownFor}...`}
        />
        {isDropdownOpen && (
          <div className="options">
            {options.map((option, i) => (
              <span
                key={i}
                className="option"
                value={option}
                onMouseDown={() => handleChange(option)}
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

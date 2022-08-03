import React from "react";
import CityDropdown from "../../CityDropdown/CityDropdown";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="title">Vend Weather</h1>
      <CityDropdown />
    </div>
  );
}

export default Navbar;

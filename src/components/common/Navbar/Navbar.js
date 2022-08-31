import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

function Navbar({ title, options, filterCityOptions }) {
  return (
    <div className="Navbar">
      <h1 className="title">{title}</h1>
      <Dropdown options={options} filterCityOptions={filterCityOptions} />
    </div>
  );
}

export default Navbar;

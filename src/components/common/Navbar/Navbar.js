import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

function Navbar({ title, options, filterCityOptions, setOption }) {
  return (
    <div className="Navbar">
      <h1 className="title">{title}</h1>
      <Dropdown options={options} filterCityOptions={filterCityOptions} setOption={setOption} />
    </div>
  );
}

export default Navbar;

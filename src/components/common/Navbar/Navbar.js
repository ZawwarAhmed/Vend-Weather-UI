import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

function Navbar({ title, options, filterOptions, setOption, navbarFor }) {
  return (
    <div className="Navbar">
      <h1 className="title">{title}</h1>
      <Dropdown options={options} filterOptions={filterOptions} setOption={setOption} dropdownFor={navbarFor} />
    </div>
  );
}

export default Navbar;

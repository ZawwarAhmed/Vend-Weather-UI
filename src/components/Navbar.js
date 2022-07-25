import React from "react";
import Dropdown from "./Dropdown";
import "../stylesheets/Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="title">Vend Weather</h1>
      <Dropdown />
    </div>
  );
}

export default Navbar;

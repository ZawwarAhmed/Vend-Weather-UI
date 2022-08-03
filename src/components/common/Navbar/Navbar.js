import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css"

function Navbar({title, data}) {
  return (
    <div className="Navbar">
      <h1 className="title">{title}</h1>
      <Dropdown data={data} />
    </div>
  );
}

export default Navbar;

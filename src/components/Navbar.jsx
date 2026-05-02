import React from "react";
import logo from "../assets/images/logo.svg";
import settingIcon from "../assets/images/icon-units.svg;"
import dropdownIcon from "../assets/images/icon-dropdown.svg";
function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <img src={logo} alt="Weather App" />
        <button className="dropdown toggle">
          <img src={settingIcon} alt="settingicon" />
          <span>Units</span>
          <img src={dropdownIcon} alt="dropdownicon" />

        </button>
      </nav>
    </div>
  );
}

export default Navbar;

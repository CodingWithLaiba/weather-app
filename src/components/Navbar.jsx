import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import logo from "../assets/images/logo.svg";
import settingIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import tickIcon from "../assets/images/icon-checkmark.svg";

function Navbar() {
  const [temperatureUnit, setTemperatureUnit] = useState("c");
  const [windUnit, setWindUnit] = useState("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");

  const handleSwitch = () => {
    setTemperatureUnit("f");
    setWindUnit("mph");
    setPrecipitationUnit("in");
  };

  return (
    <nav className="flex items-center justify-between py-4">
      {/* Logo */}
      <img src={logo} alt="Weather App" />

      {/* Dropdown */}
      <Menu as="div" className="relative">
        <MenuButton className="inline-flex justify-between items-center cursor-pointer gap-2 rounded-lg bg-[hsl(243,23%,30%)] px-2 py-2 text-xs text-white hover:bg-[hsl(243,23%,35%)]">
          <img src={settingIcon} alt="Settings" className="w-3 h-3" />
          Units
          <img src={dropdownIcon} alt="Dropdown" className="w-3 h-3" />
        </MenuButton>

        <MenuItems className="absolute right-0 mt-2 w-45 rounded-xl bg-[hsl(243,23%,30%)] text-white shadow-lg cursor-pointer divide-y divide-gray-600 px-1">
          {/* Switch */}
          <MenuItem>
            {({ active }) => (
              <button
                onClick={handleSwitch}
                className={`w-full text-left px-2 py-2 text-sm ${
                  active ? "bg-[hsl(243,23%,35%)]" : ""
                }`}
              >
                Switch to Imperial
              </button>
            )}
          </MenuItem>

          {/* Temperature */}
          <div className="mt-2">
            <p className="px-2 py-1 text-xs text-gray-500 ">
              Temperature
            </p>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setTemperatureUnit("c")}
                  className={`flex justify-between items-center w-full px-2 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Celsius (°C)
                  {temperatureUnit === "c" && (
                    <img src={tickIcon} className="w-3 h-3" />
                  )}
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setTemperatureUnit("f")}
                  className={`flex justify-between items-center w-full px-2 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Fahrenheit (°F)
                  {temperatureUnit === "f" && (
                    <img src={tickIcon} className="w-3 h-3" />
                  )}
                </button>
              )}
            </MenuItem>
          </div>

          {/* Wind */}
          <div className="mt-2">
            <p className="px-2 py-1 text-xs text-gray-400 ">
              Wind Speed
            </p>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setWindUnit("km/h")}
                  className={`flex justify-between items-center w-full px-2 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  km/h
                  {windUnit === "km/h" && (
                    <img src={tickIcon} className="w-3 h-3" />
                  )}
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setWindUnit("mph")}
                  className={`flex justify-between items-center w-full px-2 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  mph
                  {windUnit === "mph" && (
                    <img src={tickIcon} className="w-3 h-3" />
                  )}
                </button>
              )}
            </MenuItem>
          </div>

          {/* Precipitation */}
          <div className="mt-2">
            <p className="px-2 py-1 text-xs text-gray-400 ">
              Precipitation
            </p>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setPrecipitationUnit("mm")}
                  className={`flex justify-between items-center w-full px-2 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Millimeters (mm)
                  {precipitationUnit === "mm" && (
                    <img src={tickIcon} className="w-3 h-3" />
                  )}
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setPrecipitationUnit("in")}
                  className={`flex justify-between items-center w-full px-2 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Inches (in)
                  {precipitationUnit === "in" && (
                    <img src={tickIcon} className="w-3 h-3" />
                  )}
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </nav>
  );
}

export default Navbar;

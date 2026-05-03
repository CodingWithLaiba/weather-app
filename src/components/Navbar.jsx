import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import logo from "../assets/images/logo.svg";
import settingIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      
      {/* Logo */}
      <img src={logo} alt="Weather App" />

      {/* Units Dropdown */}
      <Menu as="div" className="relative inline-block">
        
        {/* Button */}
        <MenuButton className="inline-flex items-center gap-2 rounded-lg bg-[hsl(243,23%,30%)] px-4 py-2 text-sm text-white hover:bg-[hsl(243,23%,35%)]">
          <img src={settingIcon} alt="Settings" />
          Units
          <img src={dropdownIcon} alt="Dropdown" className="w-4 h-4" />
        </MenuButton>

        {/* Dropdown */}
        <MenuItems className="absolute right-0 mt-2 w-56 rounded-xl bg-[hsl(243,23%,30%)] text-white shadow-lg p-2">

          {/* Switch */}
          <MenuItem>
            {({ active }) => (
              <button
                className={`w-full text-left px-4 py-2 text-sm ${
                  active ? "bg-[hsl(243,23%,35%)]" : ""
                }`}
              >
                Switch to Imperial
              </button>
            )}
          </MenuItem>

          {/* Temperature */}
          <div className="mt-2">
            <p className="px-4 py-1 text-xs text-gray-400 uppercase">
              Temperature
            </p>

            <MenuItem>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Celsius (°C)
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Fahrenheit (°F)
                </button>
              )}
            </MenuItem>
          </div>

          {/* Wind */}
          <div className="mt-2">
            <p className="px-4 py-1 text-xs text-gray-400 uppercase">
              Wind Speed
            </p>

            <MenuItem>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  km/h
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  mph
                </button>
              )}
            </MenuItem>
          </div>

          {/* Precipitation */}
          <div className="mt-2">
            <p className="px-4 py-1 text-xs text-gray-400 uppercase">
              Precipitation
            </p>

            <MenuItem>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Millimeters (mm)
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  className={`w-full text-left px-4 py-2 text-sm ${
                    active ? "bg-[hsl(243,23%,35%)]" : ""
                  }`}
                >
                  Inches (in)
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
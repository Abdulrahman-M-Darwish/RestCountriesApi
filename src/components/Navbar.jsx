import React from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="nav flex items-center justify-between">
      <h1>Where in the world?</h1>
      <button
        className="flex items-center"
        onClick={() => setIsDarkMode((p) => !p)}
      >
        {isDarkMode ? <BsMoonFill /> : <BsMoon />} Dark Mode
      </button>
    </div>
  );
};

export default navbar;

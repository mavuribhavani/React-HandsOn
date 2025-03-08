import React from "react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;

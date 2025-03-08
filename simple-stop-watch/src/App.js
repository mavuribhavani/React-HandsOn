import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./style.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="stopwatch-container">
        <h1>{time} s</h1>
        <div className="buttons">
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;

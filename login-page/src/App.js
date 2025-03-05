import React, { useState } from "react";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Email and password are required!");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email format! Please enter a valid email.");
      return;
    }

    setError(""); // Clear previous errors
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <div className="login-box">
          <h2>Login Page</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="welcome-box">
          <h2>Welcome, {email}! 🎉</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;

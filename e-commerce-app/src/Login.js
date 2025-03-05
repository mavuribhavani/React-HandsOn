import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("⚠️ Please enter email and password.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("❌ Invalid email format. Please enter a valid email (e.g., example@gmail.com).");
      return;
    }

    // If email is valid, navigate to the Products page
    navigate("/products");
  };

  return (
    <div className="content-box">
      <h2>🔑 Login to ShopEase</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

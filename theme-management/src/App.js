//this is App.js
import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./styles.css";

// Lazy loading components
const Products = lazy(() => import("./Products"));
const Cart = lazy(() => import("./Cart"));

function App() {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Persist theme
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link">Cart ({cart.length})</Link>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>

        {/* Suspense for lazy loading */}
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Products addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import ProductCatalogue from "./ProductCatalogue";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🛍️ ShopEase</h1>
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<ProductCatalogue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

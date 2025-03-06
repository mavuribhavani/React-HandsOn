import React from "react";
import { Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpeg";
import phoneImg from "../assets/phone.jpeg";
import headphonesImg from "../assets/headphones.jpeg";
import "./EcomStyles.css";

const ProductCatalogue = ({ cart, setCart }) => {
  const products = [
    { id: 1, name: "Laptop", price: 90000, image: laptopImg },
    { id: 2, name: "Phone", price: 60000, image: phoneImg },
    { id: 3, name: "Headphones", price: 50000, image: headphonesImg }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-container">
      <h2>Product Catalogue</h2>
      <div>
        <Link to="/" className="logout-btn" style={{ marginRight: "20px" }}>Logout</Link>
        <Link to="/cart" className="cart-btn">Go to Cart ({cart.length})</Link>
    
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p className="product-price">₹{product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalogue;

import React from "react";
import { Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpeg";
import phoneImg from "../assets/phone.jpeg";
import headphonesImg from "../assets/headphones.jpeg";
import "./EcomStyles.css";

const ProductCatalogue = () => {
  const products = [
    { name: "Laptop", price: "$999", image: laptopImg },
    
    { name: "Phone", price: "$699", image: phoneImg },
    { name: "Headphones", price: "$199", image: headphonesImg }
  ];

  return (
    <div className="product-container">
      <h2>Product Catalogue</h2>
      <Link to="/" className="logout-btn">Logout</Link>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index}>
            <div className="product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
            <p className="product-price">{product.price}</p> {/* Price outside box */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalogue;
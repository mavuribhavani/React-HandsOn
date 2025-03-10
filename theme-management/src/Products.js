import React from "react";
import iphone13 from "./assets/iPhone 13.jpg";
import galaxyS21 from "./assets/Samsung Galaxy S21.jpg";
import xiaomi13Pro from "./assets/Xiaomi 13 Pro.jpg";

const products = [
  { id: 1, name: "iPhone 13", price: 65999, image: iphone13 },
  { id: 2, name: "Samsung Galaxy S21", price: 57999, image: galaxyS21 },
  { id: 3, name: "Xiaomi 13 Pro", price: 74999, image: xiaomi13Pro }
];

const Products = ({ addToCart }) => {
  return (
    <div className="container">
      <h2>Welcome to our PhoneStore</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          {/* Lazy loading images */}
          <img src={product.image} alt={product.name} loading="lazy" />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price.toLocaleString()}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;


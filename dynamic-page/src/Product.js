import React from "react";
import rolex1 from "./assets/Rolex1.jpg";
import rolex2 from "./assets/Rolex2.jpg";
import rolex3 from "./assets/Rolex3.jpg";

const products = [
  { id: 1, name: "Rolex1", price: 65999, image: rolex1 },
  { id: 2, name: "Rolex2", price: 57999, image: rolex2 },
  { id: 3, name: "Rolex3", price: 74999, image: rolex3 }
];

const Products = ({ addToCart }) => {
  return (
    <div className="container">
      <h2>Welcome to our Watch Store</h2>
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

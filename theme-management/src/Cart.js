import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : null}
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          {/* Lazy loading images */}
          <img src={item.image} alt={item.name} loading="lazy" />
          <h3>{item.name}</h3>
          <p>₹{item.price.toLocaleString()}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

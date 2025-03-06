import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EcomStyles.css";

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const proceedToPayment = () => {
        navigate('/payment');
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty. <Link to="/products">Go shopping</Link></p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p className="product-price">${item.price}</p>
                            <button onClick={() => removeFromCart(index)} className="remove-btn">Remove</button>
                        </div>
                    ))}
                    <button onClick={proceedToPayment} className="checkout-btn">Proceed to Payment</button><br />
                </div>
            )}
            <Link to="/products" className="back-btn">Back to Products</Link>
        </div>
    );
};

export default Cart;

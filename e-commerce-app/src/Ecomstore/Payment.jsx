import React from "react";
import { Link } from "react-router-dom";
import "./EcomStyles.css";

const Payment = () => {
    return (
        <div className="payment-container">
            <h2>Payment Page</h2>
            <p>Enter your payment details below:</p>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Expiry Date" required />
            <input type="text" placeholder="CVV" required />
            <button className="pay-btn">Make Payment</button>
            <Link to="/products" className="back-btn">Back to Shopping</Link>
        </div>
    );
};

export default Payment;

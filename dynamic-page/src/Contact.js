import React from "react";
import "./style.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav>
        
      </nav>

      {/* Contact Section */}
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Email: <a href="mailto:support@watchesstore.com">support@watchesstore.com</a></p>
        <p>Phone: <a href="tel:+12345678901">+1-234-567-8901</a></p>
      </div>
    </div>
  );
};

export default Contact;

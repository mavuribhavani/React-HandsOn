import React from "react";

function ProductCatalogue() {
  return (
    <div className="content-box">
      <h2>🛒 Product Catalogue</h2>
      <table>
        <tr>
          <th>📦 Product</th>
          <th>💰 Price (₹)</th>
        </tr>
        <tr>
          <td>Wireless Headphones</td>
          <td>₹1,999</td>
        </tr>
        <tr>
          <td>Smartphone</td>
          <td>₹12,999</td>
        </tr>
        <tr>
          <td>Laptop</td>
          <td>₹45,999</td>
        </tr>
        <tr>
          <td>Smartwatch</td>
          <td>₹3,499</td>
        </tr>
        <tr>
          <td>Bluetooth Speaker</td>
          <td>₹2,199</td>
        </tr>
      </table>
    </div>
  );
}

export default ProductCatalogue;

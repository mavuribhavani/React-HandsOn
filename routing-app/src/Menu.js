import React from "react";

function Menu() {
  return (
    <div className="content-box">
      <h2>📜 Our Menu</h2>
      <table>
        <tr>
          <th>🍔 Item</th>
          <th>💰 Price (₹)</th>
        </tr>
        <tr>
          <td>Margherita Pizza</td>
          <td>₹250</td>
        </tr>
        <tr>
          <td>Cheese Burger</td>
          <td>₹180</td>
        </tr>
        <tr>
          <td>Grilled Sandwich</td>
          <td>₹120</td>
        </tr>
        <tr>
          <td>French Fries</td>
          <td>₹90</td>
        </tr>
        <tr>
          <td>Pasta Alfredo</td>
          <td>₹200</td>
        </tr>
        <tr>
          <td>Chocolate Shake</td>
          <td>₹150</td>
        </tr>
      </table>
    </div>
  );
}

export default Menu;

import React from "react";
import ReactDOM from "react-dom/client";
import EcomRoutes from "./Ecomstore/Ecomroutes"; 
import "./styles.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EcomRoutes />
  </React.StrictMode>
);
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import ProductCatalogue from './ProductCatalogue';
import Cart from './Cart';
import Payment from './Payment';

const EcomRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        if (storedAuth) {
            setIsAuthenticated(JSON.parse(storedAuth));
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/products" element={isAuthenticated ? <ProductCatalogue cart={cart} setCart={setCart} /> : <Navigate to="/" />} />
                <Route path="/cart" element={isAuthenticated ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/" />} />
                <Route path="/payment" element={isAuthenticated ? <Payment /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default EcomRoutes;

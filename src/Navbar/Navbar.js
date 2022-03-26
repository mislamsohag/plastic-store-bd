import React from "react";
import "./Navbar.css"
const Navbar = ({ openModal }) => {
    return (
        <nav className="navbar">
            <h1>Kopa Samsu Store</h1>
            <button onClick={openModal}>Open Modal</button>
        </nav>
    );
};

export default Navbar;
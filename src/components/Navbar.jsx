import React from "react";
import "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">🎭 Arts Fest</a>
            </div>
            <ul className="menu">
                <li><a href="/home">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/downloads">Downloads</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

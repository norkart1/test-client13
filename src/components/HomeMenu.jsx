import React from "react";
import "../styles/homeMenu.module.css"; // Import CSS module

const HomeMenu = () => {
    return (
        <nav className="home-menu">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/downloads">Downloads</a></li>
            </ul>
        </nav>
    );
};

export default HomeMenu;

// src/components/About.jsx
import React from "react";
import "../styles/globals.css";

const About = () => {
    return (
        <div className="about-container">
            <h2>About the Arts Festival</h2>
            <p>
                Welcome to the Annual Arts Festival! This event brings together artists, performers, and creatives from around the world
                to showcase their talent and celebrate culture. Join us for an unforgettable experience filled with music, exhibitions, and workshops.
            </p>
            <img src="/assets/banner.jpg" alt="Arts Festival" className="about-image" />
        </div>
    );
};

export default About;

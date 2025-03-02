import React from "react";
import "../styles/footer.module.css"; // Import the CSS module

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Arts Festival. All Rights Reserved.</p>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

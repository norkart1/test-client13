import React from "react";
import Navbar from "./Navbar";
import Notifications from "./Notifications";
import Footer from "./Footer";
import "../styles/layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <Notifications />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

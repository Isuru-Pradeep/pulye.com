import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()}  Pulye |  All rights reserved | Designed by <a href="https://zephyrmatrix.com/">Zepher Matrix</a></p>
    </footer>
  );
};

export default Footer;

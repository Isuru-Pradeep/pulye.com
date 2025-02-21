import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import Logo from '../pulye_background_removed_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo-container">
          <div className="logo-section">
            <img src={Logo} alt="Pulye Transport Services Logo" className="logo" />
            <span><b>Pulye</b></span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="desktop-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu-overlay">
            <button className="close-menu-btn" onClick={toggleMenu}>
              <X size={24} />
            </button>
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import './LoadingSpinner.css';
import Logo from '../pulye_logo.jpg'; // Import your logo

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        <img src={Logo} alt="Pulye Logo" className="spinner-logo" />
        <div className="spinner"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Local Bus Trips</h3>
          <p>Comfortable and affordable local bus services.</p>
        </div>
        {/* Add more services as needed */}
      </div>
    </section>
  );
};

export default Services;

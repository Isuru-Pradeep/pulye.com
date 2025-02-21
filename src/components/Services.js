import React from "react";
import "./Services.css";
import { FaBus, FaRoute, FaClock, FaMoneyBill } from "react-icons/fa";

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="service-list">
                <div className="service-item">
                    <FaBus className="service-icon" />
                    <h3>Local Bus Trips</h3>
                    <p>Comfortable and affordable local bus services.</p>
                </div>
                <div className="service-item">
                    <FaRoute className="service-icon" />
                    <h3>Route Planning</h3>
                    <p>Efficient route planning to get you to your destination quickly.</p>
                </div>
                <div className="service-item">
                    <FaClock className="service-icon" />
                    <h3>Real-Time Tracking</h3>
                    <p>Track your bus in real-time for accurate arrival estimates.</p>
                </div>
                <div className="service-item">
                    <FaMoneyBill className="service-icon" />
                    <h3>Easy Payments</h3>
                    <p>Hassle-free payment options for your convenience.</p>
                </div>
                
            </div>
        </section>
    );
};

export default Services;
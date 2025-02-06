import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <section id="contact-details" className="contact-details">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>
            2/A, Welivita Pahalagama Sangharajapura, Hatharaliydda, Sri Lanka.
          </p>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>
            <a href="tel:+1234567890" className="contact-link">
              +947 456 7890
            </a>
          </p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>
            <a href="mailto:pulye9696@gmail.com" className="contact-link">
            pulye9696@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=100067143771307&mibextid=wwXIfr&mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
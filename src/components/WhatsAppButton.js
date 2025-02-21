import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+94766664562";
  const message = "Hello, I would like to know more about your services!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Contact us on WhatsApp">
      💬
    </button>
  );
};

export default WhatsAppButton;

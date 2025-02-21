import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Hero.css";
import BookJourney from "./BookJourney";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

Modal.setAppElement("#root");

const COLORS_TOP = ["#f4941c", "#e07a5f", "#3d405b", "#81b29a"]; // Using existing color palette

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2;
      stars.push(
        <circle
          key={i}
          cx={`${x}%`}
          cy={`${y}%`}
          r={size}
          fill="white"
          className="star"
        />
      );
    }
    return stars;
  };

  const stars = generateStars(200);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="hero"
    >
      <svg className="star-field">
        {stars}
      </svg>
      <div className="hero-content">
        {/* <span className="hero-beta-tag">New Routes Available!</span> */}
        <h1 className="hero-title">
          Your Journey, Our Priority
        </h1>
        <p className="hero-subtitle">
          Explore comfortable and affordable bus services to your favorite destinations.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="hero-cta-button"
          onClick={openModal}
        >
          Book Your Trip Now
          <FiArrowRight className="hero-cta-icon" />
        </motion.button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Book Journey Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <BookJourney onClose={closeModal} />
      </Modal>
    </motion.section>
  );
};

export default Hero;
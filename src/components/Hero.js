import React, { useState, useEffect, useRef } from "react";import Modal from "react-modal";
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
  const dotsCanvasRef = useRef(null);

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

  // Animated Dots Effect
  // useEffect(() => {
  //   const canvas = dotsCanvasRef.current;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   const dots = [];
  //   const dotCount = 80; // Number of dots
  //   const dotSize = 2; // Size of dots
  //   const dotSpeed = 0.5; // Speed of dots
  //   const connectionDistance = 100; // Max distance for connecting dots

  //   // Set canvas dimensions
  //   const handleResize = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //     initDots(); // Reinitialize dots when canvas is resized
  //   };

  //   // Create dots
  //   const initDots = () => {
  //     dots.length = 0; // Clear existing dots
  //     for (let i = 0; i < dotCount; i++) {
  //       dots.push({
  //         x: Math.random() * canvas.width,
  //         y: Math.random() * canvas.height,
  //         vx: (Math.random() - 0.5) * dotSpeed,
  //         vy: (Math.random() - 0.5) * dotSpeed,
  //         color: COLORS_TOP[Math.floor(Math.random() * COLORS_TOP.length)],
  //         size: Math.random() * dotSize + 1
  //       });
  //     }
  //   };

  //   // Update dot positions
  //   const updateDots = () => {
  //     dots.forEach(dot => {
  //       // Move dot
  //       dot.x += dot.vx;
  //       dot.y += dot.vy;

  //       // Bounce off edges
  //       if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
  //       if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
  //     });
  //   };

  //   // Draw dots and connections
  //   const drawDots = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     // Draw dots
  //     dots.forEach(dot => {
  //       ctx.beginPath();
  //       ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
  //       ctx.fillStyle = dot.color;
  //       ctx.fill();
  //     });

  //     // Draw connections
  //     ctx.beginPath();
  //     for (let i = 0; i < dots.length; i++) {
  //       for (let j = i + 1; j < dots.length; j++) {
  //         const dx = dots[i].x - dots[j].x;
  //         const dy = dots[i].y - dots[j].y;
  //         const distance = Math.sqrt(dx * dx + dy * dy);

  //         if (distance < connectionDistance) {
  //           ctx.moveTo(dots[i].x, dots[i].y);
  //           ctx.lineTo(dots[j].x, dots[j].y);
  //           ctx.strokeStyle = `rgba(255,255,255,${0.1 * (1 - distance / connectionDistance)})`;
  //           ctx.stroke();
  //         }
  //       }
  //     }
  //   };

  //   // Animation loop
  //   const animate = () => {
  //     updateDots();
  //     drawDots();
  //     animationId = requestAnimationFrame(animate);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize();
  //   let animationId = requestAnimationFrame(animate);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     cancelAnimationFrame(animationId);
  //   };
  // }, []);

  // Update the Animated Dots Effect section in your Hero component

  // Animated Dots Effect
  useEffect(() => {
    const canvas = dotsCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dots = [];

    // Responsive dot settings based on screen width
    const getResponsiveSettings = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        return {
          dotCount: 30,
          dotSize: 1.8,
          dotSpeed: 0.3,
          connectionDistance: 70,
        };
      } else if (width <= 768) {
        return {
          dotCount: 50,
          dotSize: 2,
          dotSpeed: 0.4,
          connectionDistance: 80,
        };
      } else {
        return {
          dotCount: 80,
          dotSize: 2,
          dotSpeed: 0.5,
          connectionDistance: 100,
        };
      }
    };

    let settings = getResponsiveSettings();

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Update settings when screen size changes
      settings = getResponsiveSettings();

      initDots(); // Reinitialize dots when canvas is resized
    };

    // Create dots
    const initDots = () => {
      dots.length = 0; // Clear existing dots
      for (let i = 0; i < settings.dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * settings.dotSpeed,
          vy: (Math.random() - 0.5) * settings.dotSpeed,
          color: COLORS_TOP[Math.floor(Math.random() * COLORS_TOP.length)],
          size: Math.random() * settings.dotSize + 1,
        });
      }
    };

    // Update dot positions
    const updateDots = () => {
      dots.forEach((dot) => {
        // Move dot
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      });
    };

    // Draw dots and connections
    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      // Draw connections
      ctx.beginPath();
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < settings.connectionDistance) {
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${
              0.1 * (1 - distance / settings.connectionDistance)
            })`;
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      updateDots();
      drawDots();
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    let animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const generateStars = (count) => {
  //   const stars = [];
  //   for (let i = 0; i < count; i++) {
  //     const x = Math.random() * 100;
  //     const y = Math.random() * 100;
  //     const size = Math.random() * 2;
  //     stars.push(
  //       <circle
  //         key={i}
  //         cx={`${x}%`}
  //         cy={`${y}%`}
  //         r={size}
  //         fill="white"
  //         className="star"
  //       />
  //     );
  //   }
  //   return stars;
  // };

  // const stars = generateStars(100);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="hero"
    >
      <div
        className="hero-background-image"
        style={{
          backgroundImage:
            "url('/img/ChatGPT Image May 18, 2025, 10_14_48 AM.png')",
        }}
      ></div>
      <canvas ref={dotsCanvasRef} className="dots-canvas"></canvas>
      {/* <svg className="star-field">{stars}</svg> */}
      <div className="hero-content">
        {/* <span className="hero-beta-tag">New Routes Available!</span> */}
        <h1 className="hero-title">Your Journey, Our Priority</h1>
        <p className="hero-subtitle">
          Explore comfortable and affordable travel services to your favorite
          destinations.
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

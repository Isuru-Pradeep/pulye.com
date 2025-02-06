// // // import React from 'react';
// // // import './Hero.css';

// // // const Hero = () => {
// // //     return (
// // //         <section className="hero">
// // //             <h1>Explore the World with Us</h1>
// // //             <p>Your journey begins here. Discover local bus services and more.</p>
// // //             <button className="cta-button">Book Now</button>
// // //         </section>
// // //     );
// // // };

// // // export default Hero;

// // import React, { useState } from "react";
// // import Modal from "react-modal";
// // import "./Hero.css";
// // import BookJourney from "./BookJourney"; // Import the BookJourney component

// // Modal.setAppElement("#root"); // Set the root element for accessibility

// // const Hero = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const openModal = () => {
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <section className="hero">
// //       <h1>Explore the World with Us</h1>
// //       <p>Your journey begins here. Discover local bus services and more.</p>
// //       <button className="cta-button" onClick={openModal}>
// //         Book Now
// //       </button>

// //       {/* Modal Popup */}
// //       <Modal
// //         isOpen={isModalOpen}
// //         onRequestClose={closeModal}
// //         contentLabel="Book Journey Modal"
// //         className="modal"
// //         overlayClassName="modal-overlay"
// //       >
// //         <BookJourney onClose={closeModal} />
// //       </Modal>
// //     </section>
// //   );
// // };

// // export default Hero;


// import React, { useState } from "react";
// import Modal from "react-modal";
// import "./Hero.css";
// import BookJourney from "./BookJourney"; // Import the BookJourney component

// Modal.setAppElement("#root"); // Set the root element for accessibility

// const Hero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section className="hero">
//       <h1>Explore the World with Us</h1>
//       <p>Your journey begins here. Discover local bus services and more.</p>
//       <button className="cta-button" onClick={openModal}>
//         Book Now
//       </button>

//       {/* Modal Popup */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Book Journey Modal"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >
//         <BookJourney onClose={closeModal} />
//       </Modal>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Hero.css";
import BookJourney from "./BookJourney"; // Import the BookJourney component

Modal.setAppElement("#root"); // Set the root element for accessibility

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero">
      <h1>Explore the World with Us</h1>
      <p>Your journey begins here. Discover local bus services and more.</p>
      <button className="cta-button" onClick={openModal}>
        Book Now
      </button>

      {/* Modal Popup */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Book Journey Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <BookJourney onClose={closeModal} />
      </Modal>
    </section>
  );
};

export default Hero;
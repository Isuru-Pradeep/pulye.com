// // // // // import React, { useState } from "react";
// // // // // import emailjs from "emailjs-com";
// // // // // import "./BookJourney.css";

// // // // // const BookJourney = ({ onClose }) => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     phone: "",
// // // // //     date: "",
// // // // //     destination: "",
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData({ ...formData, [name]: value });
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();

// // // // //     // Replace with your EmailJS service ID, template ID, and user ID
// // // // //     const serviceID = "YOUR_SERVICE_ID";
// // // // //     const templateID = "YOUR_TEMPLATE_ID";
// // // // //     const userID = "YOUR_USER_ID";

// // // // //     // Send email using EmailJS
// // // // //     emailjs
// // // // //       .send(serviceID, templateID, formData, userID)
// // // // //       .then((response) => {
// // // // //         console.log("Email sent successfully!", response);
// // // // //         alert("Thank you! Your booking details have been submitted.");
// // // // //         onClose(); // Close the modal after submission
// // // // //       })
// // // // //       .catch((error) => {
// // // // //         console.error("Failed to send email:", error);
// // // // //         alert("Oops! Something went wrong. Please try again.");
// // // // //       });
// // // // //   };

// // // // //   return (
// // // // //     <div className="book-journey">
// // // // //       <h2>Book Your Journey</h2>
// // // // //       <form onSubmit={handleSubmit} className="booking-form">
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="name">Full Name</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             id="name"
// // // // //             name="name"
// // // // //             value={formData.name}
// // // // //             onChange={handleChange}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="email">Email</label>
// // // // //           <input
// // // // //             type="email"
// // // // //             id="email"
// // // // //             name="email"
// // // // //             value={formData.email}
// // // // //             onChange={handleChange}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="phone">Phone Number</label>
// // // // //           <input
// // // // //             type="tel"
// // // // //             id="phone"
// // // // //             name="phone"
// // // // //             value={formData.phone}
// // // // //             onChange={handleChange}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="date">Travel Date</label>
// // // // //           <input
// // // // //             type="date"
// // // // //             id="date"
// // // // //             name="date"
// // // // //             value={formData.date}
// // // // //             onChange={handleChange}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="form-group">
// // // // //           <label htmlFor="destination">Destination</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             id="destination"
// // // // //             name="destination"
// // // // //             value={formData.destination}
// // // // //             onChange={handleChange}
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <button type="submit" className="cta-button">
// // // // //           Submit Booking
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BookJourney;

// // // // import React, { useState } from "react";
// // // // import emailjs from "emailjs-com";
// // // // import "./BookJourney.css";

// // // // const BookJourney = ({ onClose }) => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     date: "",
// // // //     destination: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({ ...formData, [name]: value });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();

// // // //     // Replace with your EmailJS service ID, template ID, and user ID
// // // //     const serviceID = "YOUR_SERVICE_ID";
// // // //     const templateID = "YOUR_TEMPLATE_ID";
// // // //     const userID = "YOUR_USER_ID";

// // // //     // Send email using EmailJS
// // // //     emailjs
// // // //       .send(serviceID, templateID, formData, userID)
// // // //       .then((response) => {
// // // //         console.log("Email sent successfully!", response);
// // // //         alert("Thank you! Your booking details have been submitted.");
// // // //         onClose(); // Close the modal after submission
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Failed to send email:", error);
// // // //         alert("Oops! Something went wrong. Please try again.");
// // // //       });
// // // //   };

// // // //   return (
// // // //     <div className="book-journey">
// // // //       <h2>Book Your Journey</h2>
// // // //       <form onSubmit={handleSubmit} className="booking-form">
// // // //         <div className="form-group">
// // // //           <label htmlFor="name">Full Name</label>
// // // //           <input
// // // //             type="text"
// // // //             id="name"
// // // //             name="name"
// // // //             value={formData.name}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="form-group">
// // // //           <label htmlFor="email">Email</label>
// // // //           <input
// // // //             type="email"
// // // //             id="email"
// // // //             name="email"
// // // //             value={formData.email}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="form-group">
// // // //           <label htmlFor="phone">Phone Number</label>
// // // //           <input
// // // //             type="tel"
// // // //             id="phone"
// // // //             name="phone"
// // // //             value={formData.phone}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="form-group">
// // // //           <label htmlFor="date">Travel Date</label>
// // // //           <input
// // // //             type="date"
// // // //             id="date"
// // // //             name="date"
// // // //             value={formData.date}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="form-group">
// // // //           <label htmlFor="destination">Destination</label>
// // // //           <input
// // // //             type="text"
// // // //             id="destination"
// // // //             name="destination"
// // // //             value={formData.destination}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <button type="submit" className="cta-button">
// // // //           Submit Booking
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookJourney;

// // // import React, { useState } from "react";
// // // import emailjs from "emailjs-com";
// // // import "./BookJourney.css";

// // // const BookJourney = ({ onClose }) => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     date: "",
// // //     destination: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // Replace with your EmailJS service ID, template ID, and user ID
// // //     const serviceID = "YOUR_SERVICE_ID";
// // //     const templateID = "YOUR_TEMPLATE_ID";
// // //     const userID = "YOUR_USER_ID";

// // //     // Send email using EmailJS
// // //     emailjs
// // //       .send(serviceID, templateID, formData, userID)
// // //       .then((response) => {
// // //         console.log("Email sent successfully!", response);
// // //         alert("Thank you! Your booking details have been submitted.");
// // //         onClose(); // Close the modal after successful submission
// // //       })
// // //       .catch((error) => {
// // //         console.error("Failed to send email:", error);
// // //         alert("Oops! Something went wrong. Please try again.");
// // //       });
// // //   };

// // //   return (
// // //     <div className="book-journey">
// // //       <button className="close-button" onClick={onClose}>
// // //         &times; {/* Close icon */}
// // //       </button>
// // //       <h2>Book Your Journey</h2>
// // //       <form onSubmit={handleSubmit} className="booking-form">
// // //         <div className="form-group">
// // //           <label htmlFor="name">Full Name</label>
// // //           <input
// // //             type="text"
// // //             id="name"
// // //             name="name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="email">Email</label>
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="phone">Phone Number</label>
// // //           <input
// // //             type="tel"
// // //             id="phone"
// // //             name="phone"
// // //             value={formData.phone}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="date">Travel Date</label>
// // //           <input
// // //             type="date"
// // //             id="date"
// // //             name="date"
// // //             value={formData.date}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="destination">Destination</label>
// // //           <input
// // //             type="text"
// // //             id="destination"
// // //             name="destination"
// // //             value={formData.destination}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit" className="cta-button">
// // //           Submit Booking
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default BookJourney;

// // import React, { useState } from "react";
// // import emailjs from "emailjs-com";
// // import { X } from "lucide-react"; // Import the X icon
// // import "./BookJourney.css";

// // const BookJourney = ({ onClose }) => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     date: "",
// //     destination: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Replace with your EmailJS service ID, template ID, and user ID
// //     const serviceID = "YOUR_SERVICE_ID";
// //     const templateID = "YOUR_TEMPLATE_ID";
// //     const userID = "YOUR_USER_ID";

// //     // Send email using EmailJS
// //     emailjs
// //       .send(serviceID, templateID, formData, userID)
// //       .then((response) => {
// //         console.log("Email sent successfully!", response);
// //         alert("Thank you! Your booking details have been submitted.");
// //         onClose(); // Close the modal after successful submission
// //       })
// //       .catch((error) => {
// //         console.error("Failed to send email:", error);
// //         alert("Oops! Something went wrong. Please try again.");
// //       });
// //   };

// //   return (
// //     <div className="book-journey">
// //       <button className="close-button" onClick={onClose}>
// //         <X size={24} /> {/* Use the X icon */}
// //       </button>
// //       <h2>Book Your Journey</h2>
// //       <form onSubmit={handleSubmit} className="booking-form">
// //         <div className="form-group">
// //           <label htmlFor="name">Full Name</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="phone">Phone Number</label>
// //           <input
// //             type="tel"
// //             id="phone"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="date">Travel Date</label>
// //           <input
// //             type="date"
// //             id="date"
// //             name="date"
// //             value={formData.date}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="destination">Destination</label>
// //           <input
// //             type="text"
// //             id="destination"
// //             name="destination"
// //             value={formData.destination}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit" className="cta-button">
// //           Submit Booking
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default BookJourney;

// import React, { useState, useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import { X } from "lucide-react";
// import "./BookJourney.css";

// const BookJourney = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     destination: "",
//   });

//   const formRef = useRef(null); // Create a ref for the form

//   // Dynamically set max-height based on screen size
//   useEffect(() => {
//     const setFormHeight = () => {
//       if (formRef.current) {
//         const windowHeight = window.innerHeight;
//         const maxHeight = windowHeight * 0.55; // 80% of the viewport height
//         formRef.current.style.maxHeight = `${maxHeight}px`;
//       }
//     };

//     // Set initial height
//     setFormHeight();

//     // Update height on window resize
//     window.addEventListener("resize", setFormHeight);

//     // Cleanup event listener on unmount
//     return () => window.removeEventListener("resize", setFormHeight);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Replace with your EmailJS service ID, template ID, and user ID
//     const serviceID = "YOUR_SERVICE_ID";
//     const templateID = "YOUR_TEMPLATE_ID";
//     const userID = "YOUR_USER_ID";

//     // Send email using EmailJS
//     emailjs
//       .send(serviceID, templateID, formData, userID)
//       .then((response) => {
//         console.log("Email sent successfully!", response);
//         alert("Thank you! Your booking details have been submitted.");
//         onClose(); // Close the modal after successful submission
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error);
//         alert("Oops! Something went wrong. Please try again.");
//       });
//   };

//   return (
//     <div className="book-journey">
//       <button className="close-button" onClick={onClose}>
//         <X size={24} /> {/* Use the X icon */}
//       </button>
//       <h2>Book Your Journey</h2>
//       <form onSubmit={handleSubmit} className="booking-form" ref={formRef}>
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="date">Travel Date</label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="destination">Destination</label>
//           <input
//             type="text"
//             id="destination"
//             name="destination"
//             value={formData.destination}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="cta-button">
//           Submit Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookJourney;

import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { X } from "lucide-react";
import "./BookJourney.css";

const BookJourney = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    destination: "",
  });

  const formRef = useRef(null); // Create a ref for the form

  // Dynamically set max-height based on screen size
  useEffect(() => {
    const setFormHeight = () => {
      if (formRef.current) {
        const windowHeight = window.innerHeight;
        const maxHeight = windowHeight * 0.55; // 80% of the viewport height
        formRef.current.style.maxHeight = `${maxHeight}px`;
      }
    };

    // Set initial height
    setFormHeight();

    // Update height on window resize
    window.addEventListener("resize", setFormHeight);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", setFormHeight);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Thank you! Your booking details have been submitted.");
        onClose(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="book-journey">
      <button className="close-button" onClick={onClose}>
        <X size={24} /> {/* Use the X icon */}
      </button>
      <h2>Book Your Journey</h2>
      <form onSubmit={handleSubmit} className="booking-form" ref={formRef}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Travel Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="cta-button">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookJourney;
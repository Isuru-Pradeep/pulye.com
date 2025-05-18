import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import GalleryModal from "./GalleryModal";
import "./Gallery.css";

const Gallery = ({ title = "Our Travel Services Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - replace with your actual travel service images
  const galleryImages = [
    {
      id: 1,
      src: "/img/ChatGPT Image May 18, 2025, 10_14_48 AM.png",
      alt: "Luxury van service",
      caption: "Our premium luxury van service",
    },
    {
      id: 2,
      src: "/img/acBus/1.jpg",
      alt: "Airport transfer",
      caption: "Reliable airport transfer services",
    },
    {
      id: 3,
      src: "/img/acBus/2.jpg",
      alt: "Group transport",
      caption: "Comfortable group transportation",
    },
    {
      id: 4,
      src: "/img/acBus/3.jpg",
      alt: "City tour",
      caption: "Explore the city with our guided tours",
    },
    {
      id: 5,
      src: "/img/acBus/4.jpg",
      alt: "Long distance travel",
      caption: "Long distance travel made comfortable",
    },
    {
      id: 6,
      src: "/img/acBus/5.jpg",
      alt: "Long distance travel",
      caption: "Long distance travel made comfortable",
    },
    {
      id: 7,
      src: "/img/bus/3.jpg",
      alt: "Long distance travel",
      caption: "Long distance travel made comfortable",
    },
    {
      id: 8,
      src: "/img/bus/4.jpg",
      alt: "Long distance travel",
      caption: "Long distance travel made comfortable",
    },
    {
      id: 9,
      src: "/img/bus/5.jpg",
      alt: "Long distance travel",
      caption: "Long distance travel made comfortable",
    },
    {
      id: 10,
      src: "/img/bus/1.jpg",
      alt: "Long distance travel",
      caption: "Long distance travel made comfortable",
    },
    {
      id: 11,
      src: "/img/bus/2.jpg",
      alt: "Long distance travel",
      caption: "Long distance travel made comfortable",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">
          Take a look at our professional transport services and vehicles
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={() => openModal(image)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <GalleryModal
          image={selectedImage}
          onClose={closeModal}
          images={galleryImages}
          setSelectedImage={setSelectedImage}
        />
      )}
    </section>
  );
};

export default Gallery;

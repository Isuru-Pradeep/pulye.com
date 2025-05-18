import React, { useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryModal = ({ image, onClose, images, setSelectedImage }) => {
  const currentIndex = images.findIndex((img) => img.id === image.id);

  // Wrap navigateNext in useCallback
  const navigateNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  }, [currentIndex, images, setSelectedImage]);

  // Wrap navigatePrevious in useCallback
  const navigatePrevious = useCallback(() => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  }, [currentIndex, images, setSelectedImage]);

  React.useEffect(() => {
    // Define handleKeyDown inside useEffect
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      } else if (e.key === "ArrowLeft") {
        navigatePrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // prevent scrolling when modal is open

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // restore scrolling
    };
  }, [onClose, navigateNext, navigatePrevious]); // Add all dependencies

  return (
    <div className="gallery-modal" onClick={onClose}>
      <div
        className="gallery-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="gallery-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <button
          className="gallery-modal-nav gallery-modal-prev"
          onClick={navigatePrevious}
        >
          <ChevronLeft size={36} />
        </button>

        <div className="gallery-modal-image-container">
          <img
            src={image.src}
            alt={image.alt}
            className="gallery-modal-image"
          />
          {image.caption && (
            <div className="gallery-modal-caption">
              <p>{image.caption}</p>
            </div>
          )}
        </div>

        <button
          className="gallery-modal-nav gallery-modal-next"
          onClick={navigateNext}
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;

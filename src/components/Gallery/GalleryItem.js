import React from "react";
import { ZoomIn } from "lucide-react";

const GalleryItem = ({ image, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <div className="gallery-image-container">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="gallery-image" 
          onError={(e) => {
            console.error(`Failed to load image: ${image.src}`);
            e.target.src = "/img/placeholder.jpg"; // Fallback image
          }}
        />
        <div className="gallery-overlay">
          <span className="gallery-zoom">
            <ZoomIn size={24} color="white" />
          </span>
        </div>
      </div>
      {image.caption && <p className="gallery-caption">{image.caption}</p>}
    </div>
  );
};

export default GalleryItem;
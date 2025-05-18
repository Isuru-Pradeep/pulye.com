import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ChristmasEffect from "../components/ChristmasEffect";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Gallery title="Our Transport Services Gallery" />
      </div>
      <Footer />
      <WhatsAppButton />
      <ChristmasEffect />
    </>
  );
};

export default GalleryPage;

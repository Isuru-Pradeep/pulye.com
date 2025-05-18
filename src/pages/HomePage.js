import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact/Contact";
import ContactDetails from "../components/ContactDetails";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ChristmasEffect from "../components/ChristmasEffect";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <ContactDetails />
      <Footer />
      <WhatsAppButton />
      <ChristmasEffect />
    </>
  );
};

export default HomePage;

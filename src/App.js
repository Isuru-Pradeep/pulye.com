import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the page to fully load
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    // Add event listener for page load
    window.addEventListener("load", handlePageLoad);

    // Fallback: If the page takes too long to load, hide the spinner after 4 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds fallback

    // Cleanup event listener and timeout
    return () => {
      window.removeEventListener("load", handlePageLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
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
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
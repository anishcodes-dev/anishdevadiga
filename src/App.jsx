import React, { useEffect } from "react";
import * as bootstrap from "bootstrap"; // 👈 Import Bootstrap JS utilities
import Navbar from "./components/navbar";
import Home from "./components/home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import Projects from "./components/Project";
import Certificates from "./components/Certificate";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  useEffect(() => {
    // Initialize all Bootstrap tooltips on mount
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Experience/>
      <Skills/>
      <Projects/>
      <Certificates/>
    </>
  );
}

export default App;

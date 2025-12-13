import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import homeData from "../data/home.json";
import '@coreui/icons/css/all.min.css';

function Home() {
  // Typewriter state
  const [displayedName, setDisplayedName] = useState("");
  const typingSpeed = 120; // ms per character

  // Images for rotation (put these files in /public/assets/)
  const images = [
    "/assets/profile2.png",
    "/assets/convocation.jpeg",
    "/assets/profile.png",
  ];

  // Current rotating image index
  const [currentImage, setCurrentImage] = useState(0);

  // Typewriter effect for name
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= homeData.name.length) {
        setDisplayedName(homeData.name.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // Rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="d-flex align-items-center bg-white text-dark py-5"
    >
      <div className="container py-3">
        <div className="row align-items-center gy-5">
          {/* Left side - Rotating Profile Images */}
          <div className="col-md-5 d-flex justify-content-center animate-fade-up">
            <div className="profile-wrapper">
              {/* key forces remount so CSS animation runs on each image change */}
              <img
                key={currentImage}
                src={images[currentImage]}
                alt={`Profile ${currentImage + 1}`}
                className="profile-img rotate-image"
              />
            </div>
          </div>

          {/* Right side - Info */}
          <div className="col-md-7 text-center text-md-start">
            <h1
              className="fw-bold typewriter"
              style={{ marginBottom: "0.5rem", lineHeight: 1.2 }}
            >
              {displayedName}
            </h1>

            <h4 className="text-grey mb-3 fade-in delay-1s">
              {homeData.title}
            </h4>

            <h5 className="text-grey mb-4 fade-in delay-2s">
              {homeData.description}
            </h5>

            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-4 fs-3 fade-in delay-3s">
              {homeData.github && (
                <a
                  href={homeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover-scale"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="GitHub"
                >
                  <i className="cib-github" style={{ fontSize: "1em" }}></i>
                </a>
              )}
              {homeData.linkedin && (
                <a
                  href={homeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover-scale"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="LinkedIn"
                >
                  <i className="cib-linkedin" style={{ fontSize: "1em" }}></i>
                </a>
              )}
              {homeData.kaggle && (
                <a
                  href={homeData.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover-scale"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Kaggle"
                >
                  <i className="cib-kaggle" style={{ fontSize: "1em" }}></i>
                </a>
              )}
            </div>

            {/* Resume Button */}
            <a
              href="/assets/resume.pdf#view=FitH"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark px-4 py-2 shadow hover-scale fade-in delay-4s"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

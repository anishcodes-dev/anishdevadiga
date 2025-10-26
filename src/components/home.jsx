import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import homeData from "../data/home.json";

function Home() {
  const [displayedName, setDisplayedName] = useState("");
  const typingSpeed = 120; // ms per character

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
  }, []);

  return (
    <section
      id="home"
      className="d-flex align-items-center bg-white text-dark py-5"
    >
      <div className="container py-3">
        <div className="row align-items-center gy-5">
          {/* Left side - Profile Image */}
          <div className="col-md-5 d-flex justify-content-center animate-fade-up">
            <img
              src="/assets/profile.png"
              alt="Profile"
              className="img-fluid shadow-lg"
              style={{
                width: "450px",
                height: "450px",
                maxWidth: "80%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* Right side - Info */}
          <div className="col-md-7 text-center text-md-start">
            <h1
              className="fw-bold typewriter"
              style={{ marginBottom: "0.5rem", lineHeight: 1.2 }}
            >
              {displayedName}
            </h1>
            <h5></h5>
            <h4 className="text-muted mb-3 fade-in delay-1s">
              {homeData.title}
            </h4>

            <h5 className="text-muted mb-4 fade-in delay-2s">
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
                  <i className="bi bi-github"></i>
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
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {homeData.hackerearth && (
                <a
                  href={homeData.hackerearth}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover-scale"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="HackerEarth"
                >
                  <i className="bi bi-globe"></i>
                </a>
              )}
              {homeData.hackerrank && (
                <a
                  href={homeData.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover-scale"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="HackerRank"
                >
                  <i className="bi bi-code-slash"></i>
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

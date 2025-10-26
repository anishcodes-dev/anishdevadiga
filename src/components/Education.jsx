import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import educationData from "../data/education.json";

function Education() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    // cleanup on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="bg-light text-dark py-5">
      <div className="container text-center position-relative">
        <h1 className="fw-bold mb-5 animate-fade-up">Education</h1>
        <div className="timeline position-relative mx-auto">
          {/* Top dot */}
          <div className="timeline-dot start-dot"></div>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`timeline-item bg-white shadow rounded-4 p-4 text-center animate-timeline ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="timeline-icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3">
                <i className="bi bi-mortarboard-fill fs-4"></i>
              </div>
              <h5 className="fw-bold mb-1">{edu.degree}</h5>
              <p className="mb-1 text-muted">{edu.institution}</p>
              <small className="text-secondary">{edu.year}</small>
            </div>
          ))}
          <div className="timeline-line"></div>
          <div className="timeline-dot end-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Education;

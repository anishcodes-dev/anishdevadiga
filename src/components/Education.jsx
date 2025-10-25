import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import educationData from "../data/education.json";

function Education() {
  return (
    <section id="education" className="bg-light text-dark py-5">
      <div className="container text-center position-relative">
        <h2 className="fw-bold mb-5 animate-fade-up">Education</h2>

        <div className="timeline-container d-flex justify-content-between align-items-start flex-wrap">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item text-center animate-slide-up">
              <div className="timeline-card bg-white shadow rounded-4 p-4">
                <h5 className="fw-bold mb-1">{edu.degree}</h5>
                <p className="mb-1 text-muted">{edu.institution}</p>
                <small className="text-secondary">{edu.year}</small>
              </div>

              {/* Icon */}
              <div className="timeline-icon-container position-relative mt-3">
                <div className="timeline-icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mx-auto">
                  <i className="bi bi-mortarboard-fill fs-4"></i>
                </div>

                {/* Connector line (except last card) */}
                {index < educationData.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

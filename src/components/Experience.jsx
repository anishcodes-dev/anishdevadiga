import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import experienceData from "../data/experience.json";

function Experience() {
  useEffect(() => {
    const items = document.querySelectorAll(".experience-card");

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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-white text-dark py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5 animate-fade-up">
          Experience
        </h2>

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-stretch gap-3">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="experience-card animate-fade-up flex-fill"
              style={{ minWidth: "250px", maxWidth: "300px" }}
            >
              <div className="card shadow-lg h-100 border-0 d-flex flex-column justify-content-center align-items-center text-center card-hover p-3 rounded-4">
                <div className="icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mb-3">
                  <i className="bi bi-briefcase-fill fs-4"></i>
                </div>
                <h5 className="card-title mb-1">{exp.role}</h5>
                <small className="text-grey mb-2">{exp.company}</small>
                <p className="text-secondary mb-1">{exp.duration}</p>
                {/* <p className="card-text">{exp.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .experience-card {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease-in-out;
          }

          .experience-card.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          }

          .icon {
            width: 50px;
            height: 50px;
          }

          @media (max-width: 768px) {
            .experience-card {
              min-width: 100%;
              transform: translateY(30px);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Experience;

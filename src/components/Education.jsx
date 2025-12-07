import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import educationData from "../data/education.json";

function Education() {
  useEffect(() => {
    const items = document.querySelectorAll(".education-card");

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
    <section id="education" className="bg-white text-dark py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5 animate-fade-up">
          Education
        </h2>

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-stretch gap-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="education-card animate-fade-up flex-fill"
              style={{ minWidth: "250px", maxWidth: "300px" }}
            >
              <div className="card shadow-lg h-100 border-0 d-flex flex-column justify-content-center align-items-center text-center card-hover p-3 rounded-4 ">
                <div className="icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center mb-3">
                  <i className="bi bi-mortarboard-fill fs-4"></i>
                </div>
                <h5 className="card-title mb-1">{edu.degree}</h5>
                <small className="text-grey mb-2">{edu.institution}</small>
                <p className="text-secondary mb-1">{edu.year}</p>
                <p className="card-text small">{edu.marks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .education-card {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease-in-out;
          }

          .education-card.visible {
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

          .animate-fade-up {
            animation: fadeUp 1s ease-in-out;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .education-card {
              min-width: 100%;
              transform: translateY(30px);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Education;

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import certificatesData from "../data/certificates.json";

function Certificates() {
  useEffect(() => {
    const items = document.querySelectorAll(".certificate-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    // cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <section className="container py-5 " id="certificates">
      <h2 className="fw-bold text-center mb-5 animate-fade-up">Certificates</h2>

      <div
        className={`row g-4 justify-content-${
          certificatesData.length < 4 ? "center" : "start"
        }`}
      >
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="col-md-3 col-sm-6 certificate-card fade-up"
          >
            <div className="card h-100 p-3 shadow-sm border-0 bg-white text-black rounded-4 card-inner">
              <div className="d-flex align-items-center mb-3">
                <i
                  className={`bi bi-${cert.icon} me-2`}
                  style={{ fontSize: "1.8rem", width: "30px" }}
                ></i>
                <h5 className="mb-0 fw-bold">{cert.title}</h5>
              </div>

              <p className="text-secondary small">{cert.description}</p>

              <p className="mb-1">
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="mb-2">
                <strong>Issued:</strong> {cert.date}
              </p>

              <div className="mb-3">
                <strong>Skills:</strong>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="badge bg-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn mt-auto w-100"
              >
                <i className="bi bi-file-earmark-pdf me-1"></i> View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* ---------- ON-SCROLL FADE-UP ---------- */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.65s cubic-bezier(.2,.9,.2,1);
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------- CARD & HOVER ANIMATION ---------- */
        .certificate-card {
          /* ensure the hover transform animates smoothly */
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          will-change: transform;
          cursor: default;
          display: flex; /* ensure h-100 works and button sits at bottom */
        }

        /* Inner card gets the visual styling; hover lifts the whole card */
        .certificate-card .card-inner {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          will-change: transform;
          display: flex;
          flex-direction: column;
        }

        /* Hover (mouse) and focus (keyboard) */
        .certificate-card:hover .card-inner,
        .certificate-card:focus-within .card-inner {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        /* Slightly stronger lift on pointer devices when pointer is fine */
        @media (hover: hover) and (pointer: fine) {
          .certificate-card:hover .card-inner {
            transform: translateY(-10px);
          }
        }

        /* ---------- BUTTON STYLES ---------- */
        .cert-btn {
          background-color: #ffffff;
          color: #000000;
          border: 1.5px solid #000000;
          padding: 10px;
          border-radius: 10px;
          text-align: center;
          display: block;
          transition: all 0.22s ease-in-out;
          text-decoration: none;
        }

        .cert-btn:hover,
        .cert-btn:focus {
          background-color: #000000;
          color: #ffffff;
          border: 1.5px solid #000000;
        }

        /* ---------- SMALL ACCESSIBILITY TWEAKS ---------- */
        .certificate-card:focus-within {
          outline: 3px solid rgba(0,123,255,0.12);
          outline-offset: 6px;
        }

        /* Keep layout tidy on very small screens */
        @media (max-width: 575.98px) {
          .certificate-card {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default Certificates;

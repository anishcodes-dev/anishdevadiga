import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import projectsData from "../data/projects.json";

function Projects() {

  useEffect(() => {
    const items = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="bg-white text-dark py-5">
      <div className="container">

        <h2 className="fw-bold text-center mb-5 text-black">
          Projects
        </h2>

        <div className="row g-4 justify-content-center">

          {projectsData.map((p) => (
            <div
              key={p.id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 project-card fade-up"
            >
              <article className="card shadow-lg h-100 border-0 d-flex flex-column card-hover p-3 rounded-4">

                <div className="d-flex align-items-center mb-3">
                  <div className="icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                    <i className="bi bi-folder2-open fs-4"></i>
                  </div>

                  <div className="flex-grow-1">
                    <h5 className="card-title mb-0">{p.name}</h5>
                    {p.subtitle && (
                      <small className="text-muted">{p.subtitle}</small>
                    )}
                  </div>
                </div>

                {p.description && (
                  <p className="text-secondary small mb-3">
                    {p.description}
                  </p>
                )}

                <div className="mb-3">
                  <small className="text-muted d-block mb-2">
                    Tech stack
                  </small>

                  <div className="d-flex flex-wrap gap-1">
                    {p.tech?.map((t) => (
                      <span
                        key={t}
                        className="badge bg-secondary"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto d-flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm d-flex align-items-center"
                    >
                      <i className="bi bi-github me-2"></i>
                      GitHub
                    </a>
                  )}

                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm d-flex align-items-center"
                    >
                      <i className="bi bi-door-open-fill me-2"></i>
                      Live
                    </a>
                  ) : (
                    <button
                      className="btn btn-secondary btn-sm d-flex align-items-center"
                      disabled
                    >
                      <i className="bi bi-door-open me-2"></i>
                      Live
                    </button>
                  )}
                </div>

              </article>
            </div>
          ))}

        </div>
      </div>

      <style>{`

      /* SAME ANIMATION AS CERTIFICATES */

      .fade-up {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.65s cubic-bezier(.2,.9,.2,1);
      }

      .fade-up.show {
        opacity: 1;
        transform: translateY(0);
      }

      /* Card hover */
      .card-hover {
        transition: transform 0.28s ease, box-shadow 0.28s ease;
      }

      .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.12);
      }

      .icon {
        width: 48px;
        height: 48px;
      }

      /* Prevent button wrap */
      .project-card .btn {
        white-space: nowrap;
      }

      `}</style>

    </section>
  );
}

export default Projects;
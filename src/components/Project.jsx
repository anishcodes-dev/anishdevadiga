import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import projectsData from "../data/projects.json"; // adjust path if needed

function Projects() {
  useEffect(() => {
    const items = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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
        <h2 className="fw-bold text-center mb-5 animate-fade-up">Projects</h2>

        {/* SMALL: vertical scrollable column (visible only on xs-sm). */}
        <div
          className="d-flex d-md-none flex-column overflow-auto pb-2 vertical-scroller"
          style={{
            gap: "1rem",
            WebkitOverflowScrolling: "touch",
            maxHeight: "60vh", // adjust if needed
            paddingRight: "0.25rem",
          }}
          aria-label="Projects list (vertical scroll)"
        >
          {projectsData.map((p) => (
            <div key={p.id} style={{ width: "100%" }}>
              <article className="project-card card shadow-lg h-100 border-0 d-flex flex-column card-hover p-3 rounded-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                    <i className="bi bi-folder2-open fs-4" aria-hidden="true"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-0">{p.name}</h5>
                    {p.subtitle && <small className="text-muted">{p.subtitle}</small>}
                  </div>
                </div>

                {p.description && <p className="text-secondary small mb-3">{p.description}</p>}

                <div className="mb-3">
                  <small className="text-muted d-block mb-2">Tech stack</small>
                  <div className="d-flex flex-wrap gap-1">
                    {p.tech?.map((t) => (
                      <span key={t} className="badge bg-secondary" style={{ fontSize: "0.75rem" }}>
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
                      <i className="bi bi-github me-2" />GitHub
                    </a>
                  )}
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm d-flex align-items-center"
                    >
                      <i className="bi bi-door-open-fill me-2" />Live
                    </a>
                  ) : (
                    <button
                      className="btn btn-secondary btn-sm d-flex align-items-center"
                      disabled
                      title="No live link available"
                    >
                      <i className="bi bi-door-open me-2" />Live
                    </button>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* MD+: Bootstrap grid with centered last row */}
        <div className="row d-none d-md-flex g-4 mt-3 justify-content-center">
          {projectsData.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex">
              <article className="project-card card shadow-lg h-100 border-0 d-flex flex-column card-hover p-3 rounded-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                    <i className="bi bi-folder2-open fs-4" aria-hidden="true"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-0">{p.name}</h5>
                    {p.subtitle && <small className="text-muted">{p.subtitle}</small>}
                  </div>
                </div>

                {p.description && <p className="text-secondary small mb-3">{p.description}</p>}

                <div className="mb-3">
                  <small className="text-muted d-block mb-2">Tech stack</small>
                  <div className="d-flex flex-wrap gap-1">
                    {p.tech?.map((t) => (
                      <span key={t} className="badge bg-secondary" style={{ fontSize: "0.75rem" }}>
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
                      <i className="bi bi-github me-2" />GitHub
                    </a>
                  )}
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm d-flex align-items-center"
                    >
                      <i className="bi bi-door-open-fill me-2" />Live
                    </a>
                  ) : (
                    <button
                      className="btn btn-secondary btn-sm d-flex align-items-center"
                      disabled
                      title="No live link available"
                    >
                      <i className="bi bi-door-open me-2" />Live
                    </button>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped styles to match Education theme + center-last-row tweak */}
      <style>
        {`
          .project-card {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease-in-out;
            width: 100%;
          }

          .project-card.visible {
            opacity: 1;
            transform: translateY(0);
          }

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

          .animate-fade-up {
            animation: fadeUp 0.9s ease-in-out;
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* Hide scrollbar for vertical scroller on small screens (still scrollable) */
          .vertical-scroller {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
          .vertical-scroller::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }

          /* Ensure buttons don't wrap awkwardly */
          .project-card .btn { white-space: nowrap; }

          /* Small spacing tweak so last item doesn't hug bottom edge too much */
          .vertical-scroller > div:last-child { padding-bottom: 0.25rem; }

          /* ensure columns stay flex children so cards stretch and align nicely when centered */
          .row.justify-content-center > [class*="col-"] {
            display: flex;
          }
        `}
      </style>
    </section>
  );
}

export default Projects;

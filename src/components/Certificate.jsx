import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import certificatesData from "../data/certificates.json"; // adjust path if needed

function Certificates() {
  const [activePdf, setActivePdf] = useState(null);
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    const items = document.querySelectorAll(".certificate-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((it) => observer.observe(it));
    return () => observer.disconnect();
  }, []);

  const openPdfModal = (url, title) => {
    setActivePdf(url);
    setActiveTitle(title || "Certificate");

    // If Bootstrap JS bundle is loaded, show modal programmatically
    const modalEl = document.getElementById("certModal");
    if (modalEl && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  };

  const closePdfModal = () => {
    setActivePdf(null);
    setActiveTitle("");
  };

  return (
    <section id="certificates" className="bg-white text-dark py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5 animate-fade-up">Certificates</h2>

        {/* SMALL: vertical scrollable column (visible only on xs-sm).
            maxHeight so it becomes scrollable; scrollbar hidden via CSS. */}
        <div
          className="d-flex d-md-none flex-column overflow-auto vertical-scroller pb-2"
          style={{
            gap: "1rem",
            WebkitOverflowScrolling: "touch",
            maxHeight: "60vh",
            paddingRight: "0.25rem",
          }}
          aria-label="Certificates list (vertical scroll)"
        >
          {certificatesData.map((c) => (
            <div key={c.id} style={{ width: "100%" }}>
              <article className="certificate-card card shadow-lg h-100 border-0 d-flex flex-column card-hover p-3">
                <div className="d-flex align-items-start mb-3">
                  <div className="icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                    <i className="bi bi-award-fill fs-4" aria-hidden="true"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-1">
                      {c.title}
                      {c.verification && (
                        <span className="ms-2" title="Has verification">
                          <i className="bi bi-patch-check-fill text-primary" />
                        </span>
                      )}
                    </h5>
                    <small className="text-muted d-block">{c.issuer}</small>
                    <div className="text-muted small">{c.date}</div>
                  </div>
                </div>

                {c.description && <p className="text-secondary small mb-2">{c.description}</p>}

                <div className="mb-3">
                  <small className="text-muted d-block mb-2">Skills learned</small>
                  <div className="d-flex flex-wrap gap-1">
                    {c.skills?.map((s) => (
                      <span key={s} className="badge bg-secondary" style={{ fontSize: "0.75rem" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto d-flex gap-2">
                  {c.pdf ? (
                    <button
                      type="button"
                      className="btn btn-primary btn-sm d-flex align-items-center"
                      onClick={() => openPdfModal(c.pdf, c.title)}
                      aria-controls="certModal"
                    >
                      <i className="bi bi-file-earmark-pdf-fill me-2" />
                      Certificate
                    </button>
                  ) : (
                    <button className="btn btn-secondary btn-sm" disabled>
                      <i className="bi bi-file-earmark me-2" />
                      Certificate
                    </button>
                  )}

                  {c.verification ? (
                    <a
                      href={c.verification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm d-flex align-items-center"
                    >
                      <i className="bi bi-link-45deg me-2" />
                      Verify
                    </a>
                  ) : null}
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* MD+: Bootstrap grid */}
        <div className="row d-none d-md-flex g-4 mt-3">
          {certificatesData.map((c) => (
            <div key={c.id} className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex">
              <article className="certificate-card card shadow-lg h-100 border-0 d-flex flex-column card-hover p-3">
                <div className="d-flex align-items-start mb-3">
                  <div className="icon bg-dark text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                    <i className="bi bi-award-fill fs-4" aria-hidden="true"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-1">
                      {c.title}
                      {c.verification && (
                        <span className="ms-2" title="Has verification">
                          <i className="bi bi-patch-check-fill text-primary" />
                        </span>
                      )}
                    </h5>
                    <small className="text-muted d-block">{c.issuer}</small>
                    <div className="text-muted small">{c.date}</div>
                  </div>
                </div>

                {c.description && <p className="text-secondary small mb-2">{c.description}</p>}

                <div className="mb-3">
                  <small className="text-muted d-block mb-2">Skills learned</small>
                  <div className="d-flex flex-wrap gap-1">
                    {c.skills?.map((s) => (
                      <span key={s} className="badge bg-secondary" style={{ fontSize: "0.75rem" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto d-flex gap-2">
                  {c.pdf ? (
                    <button
                      type="button"
                      className="btn btn-primary btn-sm d-flex align-items-center"
                      onClick={() => openPdfModal(c.pdf, c.title)}
                      aria-controls="certModal"
                    >
                      <i className="bi bi-file-earmark-pdf-fill me-2" />
                      Certificate
                    </button>
                  ) : (
                    <button className="btn btn-secondary btn-sm" disabled>
                      <i className="bi bi-file-earmark me-2" />
                      Certificate
                    </button>
                  )}

                  {c.verification ? (
                    <a
                      href={c.verification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm d-flex align-items-center"
                    >
                      <i className="bi bi-link-45deg me-2" />
                      Verify
                    </a>
                  ) : null}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for PDF viewer */}
      <div className="modal fade" id="certModal" tabIndex="-1" aria-labelledby="certModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered" style={{ maxWidth: "95%" }}>
          <div className="modal-content bg-transparent border-0">
            <div className="modal-header bg-white shadow-sm rounded-top">
              <h5 className="modal-title" id="certModalLabel">{activeTitle}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closePdfModal}></button>
            </div>
            <div className="modal-body p-0" style={{ height: "80vh" }}>
              {activePdf ? (
                <iframe
                  title={activeTitle}
                  src={activePdf}
                  style={{ width: "100%", height: "100%", border: 0 }}
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100 bg-white">
                  <div className="p-4 text-center">No certificate selected.</div>
                </div>
              )}
            </div>
            <div className="modal-footer bg-white shadow-sm rounded-bottom">
              <a className="btn btn-outline-primary btn-sm" href={activePdf || "#"} target="_blank" rel="noopener noreferrer">
                Open in new tab
              </a>
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={closePdfModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped styles (matching Education/Projects theme) */}
      <style>
        {`
          .certificate-card {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease-in-out;
            width: 100%;
          }
          .certificate-card.visible { opacity: 1; transform: translateY(0); }

          .card-hover { transition: transform 0.28s ease, box-shadow 0.28s ease; }
          .card-hover:hover { transform: translateY(-8px); box-shadow: 0 12px 24px rgba(0,0,0,0.12); }

          .icon { width: 48px; height: 48px; }

          .animate-fade-up { animation: fadeUp 0.9s ease-in-out; }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }

          /* Hide scrollbar for vertical scroller on small screens (still scrollable) */
          .vertical-scroller { -ms-overflow-style: none; scrollbar-width: none; }
          .vertical-scroller::-webkit-scrollbar { display: none; }

          /* Hide iframe scrollbar on mobile for clean look (still scrollable inside modal) */
          .modal-body iframe { -ms-overflow-style: none; scrollbar-width: none; }
          .modal-body iframe::-webkit-scrollbar { display: none; }

          /* Ensure buttons don't wrap awkwardly */
          .certificate-card .btn { white-space: nowrap; }
        `}
      </style>
    </section>
  );
}

export default Certificates;

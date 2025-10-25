import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
            Anish Sherigar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {[
                "Home",
                "Education",
                "Experience",
                "Skills",
                "Projects",
                "Certificates",
              ].map((item) => (
                <li className="nav-item mx-3" key={item}> {/* 👈 space between links */}
                  <a
                    className="nav-link fw-medium text-dark nav-link-hover"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* 👇 Inline hover + spacing styles */}
      <style>
        {`
          .nav-link-hover {
            position: relative;
            transition: color 0.3s ease;
            font-size: 1.05rem;
            letter-spacing: 0.5px;
          }

          .nav-link-hover::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: black;
            transition: width 0.3s ease;
          }

          .nav-link-hover:hover::after {
            width: 100%;
          }

          .nav-link-hover:hover {
            color: black !important;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;

// src/components/Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  const linkedinUrl = "https://www.linkedin.com/in/yourprofile";
  const githubUrl = "https://github.com/yourusername";
  const phoneNumber = "+91-8884847150";
  const email = "youremail@gmail.com";

  return (
    <footer className="footer bg-black text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-5">
          {/* Column 1 */}
          <div className="col-12 col-sm-6 col-md-4 text-start">
            <h4 className="fw-bold mb-1">Anish Sherigar</h4>
            <p className="role-text mb-3">Software Engineer</p>

            <div className="d-flex gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-sm-6 col-md-4 text-start">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4 text-start">
            <h6 className="fw-semibold mb-3">Contact Me</h6>

            <a
              href={`mailto:${email}?subject=Hello%20Ani`}
              className="contact-link d-block mb-2"
            >
              {email}
            </a>

            <a href={`tel:${phoneNumber}`} className="contact-link d-block">
              {phoneNumber}
            </a>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="text-start small text-muted">
          &copy; {new Date().getFullYear()} Ani — All rights reserved.
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        /* Primary vs secondary text colors */
        .footer { color: #ffffff; }
        .role-text, .text-muted, .footer-links a, .contact-link { color: #cfcfcf; }

        /* headings keep white for emphasis */
        .footer h4, .footer h6 { color: #ffffff; }

        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          color: #ffffff;
          transition: 0.22s ease;
          text-decoration: none;
        }

        .social-icon:hover,
        .social-icon:focus {
          background: #ffffff;
          color: #000000;
          transform: translateY(-3px);
        }

        .footer-links {
          padding-left: 0;
        }

        .footer-links li {
          margin: 6px 0;
        }

        .footer-links a {
          color: #cfcfcf;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .footer-links a:hover,
        .footer-links a:focus {
          color: #ffffff;
          text-decoration: underline;
        }

        .contact-link {
          color: #ffffff;
          text-decoration: none;
        }

        /* subtle off-grey for helper text */
        .text-muted {
          color: #cfcfcf !important;
        }

        .contact-link:hover,
        .contact-link:focus {
          text-decoration: underline;
        }

        /* Responsive tweaks */
        @media (max-width: 576px) {
          .footer { text-align: start; }
        }
      `}</style>
    </footer>
  );
}

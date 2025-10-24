import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css"; // Custom CSS for animations

// Import JSON directly from src/data
import homeData from "../data/home.json";

function Home() {
    return (
        <section
            id="home"
            className="d-flex align-items-center bg-white text-dark py-5"
        >
            <div className="container py-3">
                <div className="row align-items-center gy-4">
                    {/* Left side - Profile Image */}
                    <div className="col-md-5 d-flex justify-content-center animate-fade-up">
                        <img
                            src="/assets/profile.png"
                            alt="Profile"
                            className="img-fluid rounded-circle shadow-lg"
                            style={{ maxWidth: "75%", maxHeight: "55%" }}
                        />
                    </div>
                    {/* Right side - Info */}
                    <div className="col-md-7 text-center text-md-start animate-fade-up delay-1s">
                        <h1 className="fw-bold mb-2" style={{ fontSize: "3rem" }}>
                            {homeData.name}
                        </h1>
                        <h4 className="text-muted mb-3" style={{ fontSize: "1.8rem" }}>
                            {homeData.title}
                        </h4>

                        {/* Social Icons */}
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-3 fs-3">
                            {homeData.github && (
                                <a
                                    href={homeData.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark hover-scale"
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                            )}
                            {homeData.linkedin && (
                                <a
                                    href={homeData.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark hover-scale"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            )}
                            {homeData.hackerearth && (
                                <a
                                    href={homeData.hackerearth}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark hover-scale"
                                >
                                    <i className="bi bi-globe"></i>
                                </a>
                            )}
                            {homeData.hackerrank && (
                                <a
                                    href={homeData.hackerrank}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark hover-scale"
                                >
                                    <i className="bi bi-code-slash"></i>
                                </a>
                            )}
                        </div>

                        {/* Resume Button */}
                        <a
                            href="/assets/resume.pdf#view=FitH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark px-4 py-2 shadow hover-scale"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

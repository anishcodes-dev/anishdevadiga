import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import skillsData from "../data/skills.json";

function Skills() {
  useEffect(() => {
    const items = document.querySelectorAll(".skill-badge");

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

  // Group skills by category
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="bg-light text-dark py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5 animate-fade-up">Skills</h2>

        {Object.keys(groupedSkills).map((category) => (
          <div
            key={category}
            className="category-row mb-4 p-4 rounded-4 shadow animate-fade-up d-flex flex-wrap align-items-center"
          >
            {/* Left Column: Category */}
            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start align-items-center mb-3 mb-md-0">
              <h5 className="fw-bold">{category}</h5>
            </div>

            {/* Right Column: Skills Badges */}
            <div className="col-12 col-md-9 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start align-items-center">
              {groupedSkills[category].map((skill, index) => (
                <div
                  key={index}
                  className="skill-badge animate-fade-up d-flex align-items-center justify-content-center px-4 py-2"
                >
                  <span className="skill-name fw-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .category-row {
            background: #f1f1f1;
            padding: 20px;
            border-radius: 20px;
            transition: transform 0.3s ease;
          }

          .skill-badge {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.4s ease-in-out;
            min-width: 100px;
            max-width: 180px;
            background: #525456ff; /* grey shade */
            color: #ffffff; /* white font */
            border-radius: 30px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            text-align: center;
            cursor: pointer;
          }

          .skill-badge.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .skill-badge:hover {
            transform: translateY(-6px) scale(1.05);
            background: #5a6268; /* slightly darker grey */
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
          }

          .skill-name {
            font-size: 0.95rem;
            transition: all 0.3s ease;
          }

          @media (max-width: 768px) {
            .category-row {
              flex-direction: column;
              text-align: center;
            }

            .skill-badge {
              min-width: 90px;
              max-width: 150px;
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Skills;

import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { FaDesktop, FaDatabase, FaPencilRuler, FaCode, FaGithub } from 'react-icons/fa';
import 'animate.css';

export const Expertise = () => {
  const skills = [
    {
      category: "Front-End & Development Tools",
      icon: <FaDesktop />,
      skills: [
        { name: "HTML5", level: 75 },
        { name: "CSS3", level: 75 },
        { name: "JavaScript", level: 75 },
        { name: "PHP", level: 65 },
        { name: "ReactJS", level: 55 },
      ]
    },
    {
      category: "CMS/Hosting",
      icon: <FaDatabase />,
      skills: [
        { name: "WordPress", level: 85 },
        { name: "Plesk", level: 80 },
        { name: "Laragon", level: 75 },
        { name: "Exabytes", level: 80 },
      ]
    },
    {
      category: "Data & API Tools",
      icon: <FaCode />,
      skills: [
        { name: "SQL", level: 55 },
        { name: "Firebase", level: 76 },
        { name: "OpenWeatherMap API", level: 70 },
      ]
    },
    {
      category: "General Tools",
      icon: <FaGithub />,
      skills: [
        { name: "GitHub", level: 60 },
        { name: "Microsoft Word", level: 100 },
        { name: "PowerPoint", level: 85 },
      ]
    },
    {
        category: "Design Tools",
        icon: <FaPencilRuler />,
        skills: [
          { name: "Figma", level: 90 },
        ]
    },
  ];

  return (
    <section className="expertise" id="expertise">
      <h2>Expertise</h2>
      <p>A collection of my technical and software skills, showcasing my proficiency across various areas.</p>
      <Row className="skills-grid">
        {skills.map((category, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <div className="skills-category">
              <br></br><div className="category-header">
                <h4>{category.icon} {category.category}</h4>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span>{skill.name}</span>
                    <ProgressBar now={skill.level} label={`${skill.level}%`} />
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

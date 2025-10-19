import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { FaDesktop, FaDatabase, FaPencilRuler, FaCode, FaGithub } from 'react-icons/fa';
import 'animate.css';

export const Expertise = () => {
  const skills = [
    {
      category: "Web Development",
      icon: <FaDesktop />,
      skills: [
        { name: "HTML5", level: 80 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "PHP", level: 55 },
        { name: "ReactJS", level: 55 },
        { name: "Wordpress", level: 80 },
        { name: "Mobile Responsive", level: 70 },
        { name: "SEO Optimization", level: 70 },
      ]
    },
        {
        category: "DevOps & Deployment",
        icon: <FaPencilRuler />,
        skills: [
          { name: "Dns & Hosting Setup", level: 90 },
          { name: "Exabytes", level: 90 },
          { name: "Github", level: 70 },
          { name: "Vercel V0", level: 70 },
          { name: "Laragon", level: 70 },
          { name: "Plesk", level: 100 },
          { name: "Cpanel", level: 85 },
        ]
    },
    {
      category: "UI/UX & Design Tools",
      icon: <FaDatabase />,
      skills: [
        { name: "Figma", level: 70 },
        { name: "UI design", level: 80 },
        { name: "UX design", level: 75 },
        { name: "Prototyping", level: 80 },
        { name: "Wireframing", level: 80 },
      ]
    },
    {
      category: "Backend Database",
      icon: <FaCode />,
      skills: [
        { name: "SQL", level: 55 },
        { name: "Firebase", level: 76 },
        { name: "OpenWeatherMap API", level: 70 },
      ]
    },
    {
      category: "Mobile Development",
      icon: <FaGithub />,
      skills: [
        { name: "Flutter", level: 60 },
        { name: "React Native", level: 70 },
        { name: "Cross-platform", level: 90 },
      ]
    },
    {
        category: "AI & Automation Tools",
        icon: <FaPencilRuler />,
        skills: [
          { name: "Black Box Testing", level: 90 },
          { name: "Chatgpt", level: 100 },
          { name: "Prompt Engineering", level: 100 },
        ]
    },
    {
      category: "Development Practices",
      icon: <FaGithub />,
      skills: [
        { name: "Front-end", level: 90 },
        { name: "Full-stack", level: 60 },
        { name: "Low-code", level: 90 },
        { name: "Agile Methodology", level: 85 },
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

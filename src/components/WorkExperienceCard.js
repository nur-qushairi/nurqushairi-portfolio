import React from 'react';
import { Col } from 'react-bootstrap';
import 'animate.css';

export const WorkExperienceCard = ({ title, company, duration, responsibilities, highlights }) => {
  return (
    <Col size={12} sm={12} md={12}>
      <div className="work-exp-card animate__animated animate__fadeInUp">
        <div className="timeline-dot" />
        <div className="work-exp-content">
          <h4>{title}</h4>
          <h4 className="company">{company}</h4>
          <h5 className="duration">{duration}</h5>

          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {highlights && <h6 className="highlight"><strong>Highlight:</strong> {highlights}</h6>}
        </div>
      </div>
    </Col>
  );
};



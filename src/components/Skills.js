import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-radiant.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    "Responsive Web Development",
    "Web Hosting & Plesk Admin",
    "UI/UX Design & Figma Prototyping",
    "CMS Website Customization",
    "Website Maintenance & Updates",
    "Front-End Coding (HTML/CSS/PHP)",
    "Cross-Browser Compatibility",
    "SEO Optimization Techniques",
    "Team Collaboration & Communication"
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Core Expertise</h2>
              <p>
                From design to deployment, I bring a range of skills to craft and maintain websites <br />
                that are fast, functional, and easy to use.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item skill-card" key={index}>
                    <h5>{skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

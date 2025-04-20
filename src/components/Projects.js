import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WorkExperienceCard } from "./WorkExperienceCard";
import { Expertise } from './Expertise'; 
import projImg1 from "../assets/img/project-pbroadtax.png";
import projImg2 from "../assets/img/project-pbht.png";
import projImg3 from "../assets/img/project-pronet4u.png";
import projImg4 from "../assets/img/project-dongfeng.png";
import projImg5 from "../assets/img/project-myportfolio.png";
import projImg6 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  const projects = [
    {
      title: "pbroadtax.com",
      description: "SZ-Autohouse Sdn Bhd",
      role: "Front-End Developer- Website Builder with custom HTML & CSS integration",
      date: "Published on June 2024",
      imgUrl: projImg1,
      link: "https://pbroadtax.com",
    },
    {
      title: "pbholidaysandtours.com",
      description: "PB Holidays and Tours Sdn Bhd",
      role: "Full-Stack Web Developer – Built from scratch using HTML, CSS, JavaScript & PHP",
      date: "Published on Oct 2024",
      imgUrl: projImg2,
      link: "https://pbholidaysandtours.com",
    },
    {
      title: "pronet4u.com.my",
      description: "Proton eMas Pantai Bharu Autohaus Sdn Bhd",
      role: "CMS Developer – Specialized in WordPress site setup & custom HTML/CSS styling",
      date: "Published on Dec 2024",
      imgUrl: projImg3,
      link: "https://pronet4u.com.my",
    },
    {
      title: "dongfeng4u.com.my",
      description: "Pantai Bharu Holdings Sdn Bhd",
      role: "Front-End Developer – WordPress with advanced HTML/CSS customization & layout enhancements",
      date: "Published on Feb 2025",
      imgUrl: projImg4,
      link: "https://dongfeng4u.com.my",
    },
    {
      title: "My Portfolio",
      description: "Nur Qushairi's Portfolio",
      role: "Front-End Developer (with Backend Integration) – Built and styled a portfolio website using React. Integrated contact form using Formspree and previously experimented with SMTP setup via Brevo. Deployed via GitHub Pages",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const experiences = [
    {
      title: "Executive Web Developer",
      duration: "Jan 2024 – Present",
      company: "Pantai Bharu Group of Companies, Klang",
      responsibilities: [
        "Designed and deployed 4 company websites across various industries.",
        "Managed 2 in-house company websites including a Staff Portal and a Client-Facing Site, improving internal communication and customer engagement.",
        "Designed and developed responsive websites for automotive and tourism subsidiaries using HTML, CSS, PHP, and WordPress.",
        "Created UI/UX wireframes in Figma before development to ensure a user-centered design approach.",
        "Managed domain and server settings using Plesk for secure deployment and hosting.",
        "Maintained and developed a staff portal using SQL, HTML, CSS, and PHP hosted via Exabytes.",
        "Developed a corporate website in WordPress tailored for external users.",
        "Customized CMS platforms to improve usability, SEO, and mobile responsiveness.",
        "Managed IT and web admin tasks including staff emails, telecoms, and plugin updates.",
      ],
      highlights: "Improved internal efficiency and public engagement through tailored website design."
    },
    {
      title: "Internship – IT Software Support",
      duration: "Jul 2023 – Oct 2023",
      company: "NSS IT Solution Sdn Bhd, Cyberjaya",
      responsibilities: [
        "Conducted User Acceptance Test (UAT) on KTMB live projects, including websites and mobile apps.",
        "Designed responsive admin system prototypes using Figma",
        "Developed test scripts and supported software testing phases for key projects",
        "Collaborated with developers and QA teams to ensure timely bug resolution and successful feature rollouts."
      ],
      highlights: "Identified critical issues during UAT, improved test efficiency, and designed responsive prototypes that enhanced user experience across platforms"
    }
    
  ];
  
  
  const studies = [
    {
      title: "Bachelor of Computer Science (Hons.) specialization in Software Engineering",
      duration: "2023",
      company: "Multimedia University Cyberjaya Campus",
      responsibilities: [
      ],
    },
    {
      title: "Foundation in Information Technology",
      duration: "2017",
      company: "Multimedia University Cyberjaya Campus",
      responsibilities: [
      ],
    },
    {
      title: "Sijil Pelajaran Malaysia (SPM)",
      duration: "2015",
      company: "SMK Saujana Utama Sg Buloh",
      responsibilities: [
      ],
    }

    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Professional Backgrounds</h2>
                <p>Combining academic knowledge with practical experience in front-end development, web design, and UI/UX implementation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience & Background</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Expertise</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p><h5>Work Experience</h5></p>
                      <p> A quick overview of my professional journey, highlighting the roles and companies that helped shape my skills and experience.</p>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <Row className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            {
                              experiences.map((exp, index) => (
                                <WorkExperienceCard key={index} {...exp} />
                              ))
                            }
                          </Row>
                        }
                      </TrackVisibility>
                      <p><h5>Background Studies</h5></p>
                      <p>A glimpse into my academic path, highlighting the studies that built my foundation and sparked my curiosity.</p>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <Row className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            {
                              studies.map((exp, index) => (
                                <WorkExperienceCard key={index} {...exp} />
                              ))
                            }
                          </Row>
                        }
                      </TrackVisibility>                      
                    </Tab.Pane>
                                              
                    <Tab.Pane eventKey="third">  {/* Expertise Tab */}
                      <Expertise />  {/* Insert the Expertise component here */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  )
}

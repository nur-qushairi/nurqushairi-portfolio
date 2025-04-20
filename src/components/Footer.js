import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Qushairi.png";
import navicon1 from "../assets/img/nav-icon1.svg";
import navicon2 from "../assets/img/github.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <br></br><br></br>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/nur-qushairi-b4782135b" target="_blank" rel="noopener noreferrer"><img src={navicon1} alt="LinkedIn" /></a>
            <a href="a"><img src={navicon2} alt="Github" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

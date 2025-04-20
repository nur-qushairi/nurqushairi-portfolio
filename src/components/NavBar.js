import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Qushairi.png';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/github.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState("false");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home </Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Expertise</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/nur-qushairi-b4782135b" target="_blank" rel="noopener noreferrer"><img src={navicon1} alt="LinkedIn" /></a>
                            <a href="a"><img src={navicon2} alt="" /></a>
                        </div>
                        {}
                        <a href="/nur_qushairi.pdf" download>
                            <button className="vvd">
                                <span>Download Resume</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

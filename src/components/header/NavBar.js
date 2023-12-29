//import hooks
import React, { useState, useEffect } from "react";
//import component
import { Container, Nav, Navbar } from "react-bootstrap";
//import img
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
//import style
import "bootstrap/dist/css/bootstrap.min.css";

import "./header.css";

export default function NavBar() {
  let [activeLink, setactivelink] = useState("");
  let [scrolled, setscrolld] = useState(false);

  let onUpdateActiveLink = (value) => {
    setactivelink(value);
  };
  useEffect(() => {
    let onscroll = () => {
      if (window.scrollY > 50) {
        setscrolld(true);
      } else {
        setscrolld(false);
      }
    };

    window.addEventListener("scroll", onscroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="menu">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/sife.ashraf.756859/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/sife-ashraf-8029b027b/">
                <img src={navIcon2} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

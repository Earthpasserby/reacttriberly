import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.screenY > 200);
  });

  return (
    <>
      <header className="header">
        <Navbar>
          <Container className="flex">
            <Navbar.Brand href="#home" className="logo">
              <img
                src="trench.png"
                alt="hands shaking"
                style={{ width: 100 }}
              />
              <br />
            </Navbar.Brand>
            <Nav className="me-auto nav">
              <ul
                className={sidebar ? "nav-links-sidebar" : "nav-links"}
                onClick={() => setSidebar(false)}
              >
                <li>
                  <Link to="/">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/">THE APP </Link>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li>
                  <Link to="/culture">CULTURE </Link>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li>
                  <Link to="/media">MEDIA </Link>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li>
                  <Link to="/blog">BLOG </Link>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li>
                  <Link to="/contact">CONTACT US </Link>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
              </ul>
            </Nav>
          </Container>
        </Navbar>

        {/* <div className="container flex">
          <div className="logo">
            <img src="trr.png" alt="hands shaking" style={{ width: 100 }} />
            <br />
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">ABOUT US</Link>
              </li>
              <li>
                <Link to="/">THE APP </Link>
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <li>
                <Link to="/culture">CULTURE </Link>
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <li>
                <Link to="/media">MEDIA </Link>
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <li>
                <Link to="/blog">BLOG </Link>
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
              <li>
                <Link to="/contact">CONTACT US </Link>
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </ul>
          </div>
          <button className="navbar-items-icon"></button>
        </div> */}
      </header>
    </>
  );
};

export default Header;

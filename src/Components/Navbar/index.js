import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";

function NavbarComp() {
  const [navBg, setNavBg] = useState(false);
  const changeNavbarBg = () => {
    if (window.scrollY > 55) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBg);
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg={navBg ? "black" : "transparent"}
      variant={navBg ? "dark" : "ligth"}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand>
          <h2 className="navbar-Brand">{"< />"}</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" id="nav-link">
              About me
            </Link>
            <Link className="nav-link" id="nav-link">
              Technologies
            </Link>
            <Link className="nav-link" id="nav-link">
              Projects
            </Link>
            <Link className="nav-link" id="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

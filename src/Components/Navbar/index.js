import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function NavbarComp() {
  const [navBg, setNavBg] = useState(false);
  const changeNavbarBg = () => {
    if (window.scrollY > 35) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBg);
  return (
    <Navbar
      bg={"transparent"}
      variant={navBg ? "dark" : "ligth"}
      fixed="top"
      expand={"lg"}
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/my-web" className="navbar-brand">
            Marlon Uzcátegui
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link">About me</Link>
            <Link className="nav-link">Projects</Link>
            <Link className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import profileImage from "../../assets/images/ProfileImage.jpg";
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
      bg={"transparent"}
      variant={navBg ? "dark" : "ligth"}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand>
          <img src={profileImage} className="imgBrand" alt="BrandImage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link fw-bold">About me</Link>
            <Link className="nav-link fw-bold">Projects</Link>
            <Link className="nav-link fw-bold">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

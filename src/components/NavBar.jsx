import React from "react";
import "../styles/components/navbar.css";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Scrollspy
          items={["home", "about", "projects", "contact"]}
          currentClassName="is-current"
        >
          <li>
            <Link to="home" smooth={true} duration={500}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              A propos
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projets
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </Scrollspy>
      </nav>
    </header>
  );
};

export default NavBar;

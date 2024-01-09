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
          offset={-300}
        >
          <Link to="home" smooth={true} duration={500}>
            <li>Accueil</li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li>A propos</li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li>Projets</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li>Contact</li>
          </Link>
        </Scrollspy>
      </nav>
    </header>
  );
};

export default NavBar;

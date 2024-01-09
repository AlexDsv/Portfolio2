import React, { useState } from "react";
import "../styles/components/navbar.css";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-icon">
            {isBurgerOpen ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </div>
          {isBurgerOpen ? (
            <div className="burger-nav">
              <ul>
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
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <Scrollspy
          items={["home", "about", "projects", "contact"]}
          currentClassName="is-current"
          offset={-300}
          className="navbar-list"
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

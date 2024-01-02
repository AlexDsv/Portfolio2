import React, { useState } from "react";
import "../styles/components/navbar.css";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Accueil");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li
            className={activeItem === "Accueil" ? "active" : ""}
            onClick={() => handleItemClick("Accueil")}
          >
            Accueil
          </li>
          <li
            className={activeItem === "A propos" ? "active" : ""}
            onClick={() => handleItemClick("A propos")}
          >
            A propos
          </li>
          <li
            className={activeItem === "Projets" ? "active" : ""}
            onClick={() => handleItemClick("Projets")}
          >
            Projets
          </li>
          <li
            className={activeItem === "Contact" ? "active" : ""}
            onClick={() => handleItemClick("Contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

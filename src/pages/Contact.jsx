import React from "react";
import "../styles/pages/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>Vous pouvez me contacter par mail à l'adresse suivante</p>
      <div className="contact-mail">
        <a href="mailto">alex.dsv@hotmail.fr</a>
      </div>
    </div>
  );
};

export default Contact;

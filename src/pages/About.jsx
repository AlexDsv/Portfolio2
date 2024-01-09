import React from "react";
import "../styles/pages/about.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about">
      <h2>A propos</h2>
      <div className="about-content">
        <div className="me">
          <h3>Qui suis-je ?</h3>
          <p>
            Développeur <span className="white-span">frontend</span> avec un
            attrait pour le <span className="blue-span">design</span>, je
            m'efforce d'allier technique et esthétique dans mes projets.
            Passionné par l'apprentissage continu, je suis toujours en quête
            d'évolution et de progression. <br />
            <br />
            Mes travaux sont visibles dans la section
            <span className="white-span"> projets</span>. À la recherche de
            nouvelles <span className="blue-span">opportunités</span>, je suis
            ouvert à des projets où mes compétences et mon intérêt pour le
            design peuvent converger.
            <br />
            <br />
            N'hésitez pas à me contacter pour discuter de collaborations
            potentielles !
          </p>
        </div>
        <div className="skills">
          <h3>Mes compétences</h3>
          <div className="skills-bubbles">
            <div className="skill-bubble">
              HTML <i class="fa-brands fa-html5"></i>
            </div>
            <div className="skill-bubble">
              CSS <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div className="skill-bubble">
              SASS <i class="fa-brands fa-sass"></i>
            </div>
            <div className="skill-bubble">
              JavaScript <i class="fa-brands fa-square-js"></i>
            </div>
            <div className="skill-bubble">
              React <i class="fa-brands fa-react"></i>
            </div>
            <div className="skill-bubble">
              React Native <i class="fa-brands fa-react"></i>
            </div>
            <div className="skill-bubble">TypeScript</div>
          </div>
          <div>
            <button className="contact-btn">
              <Link to="contact" smooth={true} duration={500}>
                Contactez-moi <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
